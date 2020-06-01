var timeout$ = 0;
var startRecording = localStorage['is-recording'] === 'true';

function stringify_object(object, depth = 0, max_depth = 2) {
  // change max_depth to see more levels, for a touch event, 2 is good
  if (depth > max_depth) return 'Object';

  const obj = {};
  for (let key in object) {
    let value = object[key];
    if (value instanceof Node)
      // specify which properties you want to see from the node
      value = { id: value.id };
    else if (value instanceof Window) value = 'Window';
    else if (value instanceof Object)
      value = stringify_object(value, depth + 1, max_depth);

    obj[key] = value;
  }

  return depth ? obj : JSON.stringify(obj);
}

function isTextBoxType(el) {
  switch (el.getAttribute('type')) {
    case 'text':
      return true;
    case 'email':
      return true;
    case 'number':
      return true;
    case 'password':
      return true;
    case 'search':
      return true;
    case 'tel':
      return true;
    case 'text':
      return true;
    case 'url':
      return true;
    default:
      return false;
  }
}

function isElement(el) {
  let isElem;

  if (typeof HTMLElement === 'object') {
    isElem = el instanceof HTMLElement;
  } else {
    isElem =
      !!el &&
      typeof el === 'object' &&
      el.nodeType === 1 &&
      typeof el.nodeName === 'string';
  }
  return isElem;
}

function getClasses(el) {
  if (!el.hasAttribute('class')) {
    return [];
  }

  try {
    let classList = Array.prototype.slice.call(el.classList);

    // return only the valid CSS selectors based on RegEx
    return classList.filter((item) =>
      !/^[a-z_-][a-z\d_-]*$/i.test(item) ? null : item
    );
  } catch (e) {
    let className = el.getAttribute('class');

    // remove duplicate and leading/trailing whitespaces
    className = className.trim().replace(/\s+/g, ' ');

    // split into separate classnames
    return className.split(' ');
  }
}

function getClassSelectors(el) {
  const classList = getClasses(el).filter(Boolean);
  return classList.map((cl) => `.${cl}`);
}

function getTag(el) {
  return el.tagName.toLowerCase().replace(/:/g, '\\:');
}

function getNthChild(element) {
  let counter = 0;
  let k;
  let sibling;
  const { parentNode } = element;

  if (Boolean(parentNode)) {
    const { childNodes } = parentNode;
    const len = childNodes.length;
    for (k = 0; k < len; k++) {
      sibling = childNodes[k];
      if (isElement(sibling)) {
        counter++;
        if (sibling === element) {
          return `:nth-child(${counter})`;
        }
      }
    }
  }
  return null;
}

function getAttributes(el, attributesToIgnore = ['id', 'class', 'length']) {
  const { attributes } = el;
  const attrs = [...attributes];

  return attrs.reduce((sum, next) => {
    if (!(attributesToIgnore.indexOf(next.nodeName) > -1)) {
      sum.push(`[${next.nodeName}="${next.value}"]`);
    }
    return sum;
  }, []);
}

function getXPathForElement(elem) {
  let path;
  while (elem) {
    let subSelector = elem.localName;
    if (!subSelector) {
      break;
    }
    subSelector = subSelector.toLowerCase();

    const parent = elem.parentElement;

    if (parent) {
      const sameTagSiblings = parent.children;
      if (sameTagSiblings.length > 1) {
        let nameCount = 0;
        const index =
          [...sameTagSiblings].findIndex((child) => {
            if (elem.localName === child.localName) {
              nameCount++;
            }
            return child === elem;
          }) + 1;
        if (index > 1 && nameCount > 1) {
          subSelector += ':nth-child(' + index + ')';
        }
      }
    }

    path = subSelector + (path ? '>' + path : '');
    elem = parent;
  }
  return path;
}

function getID(el) {
  const id = el.getAttribute('id');

  if (id !== null && id !== '') {
    // if the ID starts with a number selecting with a hash will cause a DOMException
    return id.match(/^\d/) ? `[id="${id}"]` : '#' + id;
  }
  return null;
}

function reInitializeActionList() {
  delete localStorage['actionlist'];
}

function getActionList() {
  let actionlist = [];
  try {
    actionlist = JSON.parse(localStorage['actionlist']);
  } catch (e) {
    actionlist = [];
  }
  return actionlist;
}

function setActionList(a) {
  if (!a) return;
  let actionList = getActionList();
  actionList.push(a);
  localStorage['actionlist'] = JSON.stringify(actionList);
}

function getIdentifers(el) {
  return {
    xPath: getXPathForElement(el),
    id: getID(el),
    class: getClassSelectors(el),
    tag: getTag(el),
    nthChild: getNthChild(el),
    attributes: getAttributes(el),
    innerHtml: el.innerHTML,
  };
}

function actionCreator({ event, el, opt, data = {} }) {
  data = {
    ...data,
    event: stringify_object(event),
    el_html: el.outerHTML,
    clickPos: {
      x: event.x,
      y: event.y,
    },
  };

  return {
    identifers: getIdentifers(el),
    page: window.location.href,
    opt,
    data,
  };
}

async function saveStream() {
  // const fileStream = streamSaver.createWriteStream('filename.txt');

  // new Response(JSON.stringify(getActionList(), null, 2)).body
  //   .pipeTo(fileStream)
  //   .then(() => {
  //     reInitializeActionList();
  //   });

  let data = JSON.stringify(getActionList());

  await fetch('http://localhost:2000/action-record', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
    body: data,
  });
  alert('recording done successfully!');
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  clearTimeout(timeout$);
  timeout$ = setTimeout(() => {
    localStorage['is-recording'] = message.isRecording;
    startRecording = message.isRecording;
    if (startRecording) {
      document.removeEventListener('click', onDocumentClick);
      document.addEventListener('click', onDocumentClick);
      reInitializeActionList();
    }
    if (!startRecording) {
      document.removeEventListener('click', onDocumentClick);
      saveStream();
    }
  }, 500);
});

function onDocumentClick(e) {
  if (!startRecording) return;
  let a;
  let target = e.target;
  if (isTextBoxType(target)) {
    target.addEventListener('blur', () => {
      a = actionCreator({
        event: e,
        el: target,
        opt: 'write',
        data: {
          text: target.value,
        },
      });
      setActionList(a);
    });
  } else {
    a = actionCreator({
      event: e,
      el: target,
      opt: 'click',
    });
    setActionList(a);
  }
}
