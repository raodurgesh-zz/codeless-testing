export default [
  {
    identifers: {
      xPath: 'html>body>main>input',
      id: '#name',
      class: [],
      tag: 'input',
      nthChild: ':nth-child(2)',
      attributes: ['[type="text"]', '[name="name"]'],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'write',
    data: {
      text: 'hello',
      event:
        '{"isTrusted":true,"screenX":87,"screenY":151,"clientX":87,"clientY":17,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":87,"pageY":17,"x":87,"y":17,"offsetX":35,"offsetY":8,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":"name"},"layerX":87,"layerY":17,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":"name"},"currentTarget":null,"eventPhase":0,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":6661.6350000258535,"srcElement":{"id":"name"},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":"name"},"1":{"id":""},"2":{"id":""},"3":{},"4":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html: '<input type="text" name="name" id="name">',
      clickPos: { x: 87, y: 17 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(3)',
      id: null,
      class: ['.sc-AykKF', '.gCzSNH', '.rem-block'],
      tag: 'div',
      nthChild: ':nth-child(3)',
      attributes: [],
      innerHtml:
        '\n              <label class="sc-AykKI eydcHf"><input type="checkbox" name="rememberMe" class="sc-AykKK dGrzVI"><span class="sc-AykKJ jkRukr"></span></label>\n              <div class="sc-fzXfLO dBgmiZ">Remember me</div>\n            ',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":259,"screenY":274,"clientX":259,"clientY":140,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":259,"pageY":140,"x":259,"y":140,"offsetX":251,"offsetY":13,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":259,"layerY":140,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":9617.904999991879,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{},"8":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<div class="sc-AykKF gCzSNH rem-block">\n              <label class="sc-AykKI eydcHf"><input type="checkbox" name="rememberMe" class="sc-AykKK dGrzVI"><span class="sc-AykKJ jkRukr"></span></label>\n              <div class="sc-fzXfLO dBgmiZ">Remember me</div>\n            </div>',
      clickPos: { x: 259, y: 140 },
    },
  },
  {
    identifers: {
      xPath: 'html>body>div',
      id: null,
      class: ['.btn-div'],
      tag: 'div',
      nthChild: ':nth-child(3)',
      attributes: ['[onclick=""]'],
      innerHtml: 'div click',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":42,"screenY":171,"clientX":42,"clientY":37,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":42,"pageY":37,"x":42,"y":37,"offsetX":35,"offsetY":10,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":42,"layerY":37,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":11165.374999982305,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{},"4":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html: '<div onclick="" class="btn-div">div click</div>',
      clickPos: { x: 42, y: 37 },
    },
  },
  {
    identifers: {
      xPath: 'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div>input',
      id: '#username',
      class: ['.sc-AykKE', '.kuQxgh'],
      tag: 'input',
      nthChild: ':nth-child(2)',
      attributes: [
        '[type="text"]',
        '[name="username"]',
        '[aria-label="email"]',
        '[placeholder="Email"]',
        '[value="rskumar@xavient.com"]',
      ],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'write',
    data: {
      text: 'email',
      event:
        '{"isTrusted":true,"screenX":83,"screenY":209,"clientX":83,"clientY":75,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":83,"pageY":75,"x":83,"y":75,"offsetX":29,"offsetY":6,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":"username"},"layerX":83,"layerY":75,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":"username"},"currentTarget":null,"eventPhase":0,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":13470.654999953695,"srcElement":{"id":"username"},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":"username"},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{},"9":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<input type="text" id="username" name="username" aria-label="email" placeholder="Email" class="sc-AykKE kuQxgh" value="rskumar@xavient.com">',
      clickPos: { x: 83, y: 75 },
    },
  },
  {
    identifers: {
      xPath: 'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div',
      id: null,
      class: ['.sc-AykKF', '.gCzSNH'],
      tag: 'div',
      nthChild: ':nth-child(1)',
      attributes: [],
      innerHtml:
        '\n              <label for="username" class="sc-AykKD cyZdIS">Email<sup>*</sup></label><input type="text" id="username" name="username" aria-label="email" placeholder="Email" class="sc-AykKE kuQxgh" value="rskumar@xavient.com">\n            ',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":335,"screenY":208,"clientX":335,"clientY":74,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":335,"pageY":74,"x":335,"y":74,"offsetX":328,"offsetY":12,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":335,"layerY":74,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":18218.980000005104,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{},"8":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<div class="sc-AykKF gCzSNH">\n              <label for="username" class="sc-AykKD cyZdIS">Email<sup>*</sup></label><input type="text" id="username" name="username" aria-label="email" placeholder="Email" class="sc-AykKE kuQxgh" value="rskumar@xavient.com">\n            </div>',
      clickPos: { x: 335, y: 74 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(2)>div>input',
      id: null,
      class: ['.sc-AykKE', '.kuQxgh'],
      tag: 'input',
      nthChild: ':nth-child(1)',
      attributes: [
        '[type="password"]',
        '[name="password"]',
        '[aria-label="login"]',
        '[placeholder="Password"]',
        '[value="password"]',
      ],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'write',
    data: {
      text: '1@3456',
      event:
        '{"isTrusted":true,"screenX":94,"screenY":254,"clientX":94,"clientY":120,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":94,"pageY":120,"x":94,"y":120,"offsetX":85,"offsetY":10,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":94,"layerY":120,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":null,"eventPhase":0,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":19856.199999921955,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{"id":""},"9":{},"10":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<input type="password" name="password" aria-label="login" placeholder="Password" class="sc-AykKE kuQxgh" value="password">',
      clickPos: { x: 94, y: 120 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(2)',
      id: null,
      class: ['.sc-AykKF', '.gCzSNH'],
      tag: 'div',
      nthChild: ':nth-child(2)',
      attributes: [],
      innerHtml:
        '\n              <label class="sc-AykKD cyZdIS mb-1 login-label-txt">Password<sup>*</sup></label>\n              <div>\n                <input type="password" name="password" aria-label="login" placeholder="Password" class="sc-AykKE kuQxgh" value="password"><span class="sc-AykKG jEmEqf"><span class="show-eye" title="Show"><img alt="img-show-password" src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg"></span></span>\n              </div>\n            ',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":405,"screenY":241,"clientX":405,"clientY":107,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":405,"pageY":107,"x":405,"y":107,"offsetX":398,"offsetY":21,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":405,"layerY":107,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":25481.595000019297,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{},"8":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<div class="sc-AykKF gCzSNH">\n              <label class="sc-AykKD cyZdIS mb-1 login-label-txt">Password<sup>*</sup></label>\n              <div>\n                <input type="password" name="password" aria-label="login" placeholder="Password" class="sc-AykKE kuQxgh" value="password"><span class="sc-AykKG jEmEqf"><span class="show-eye" title="Show"><img alt="img-show-password" src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg"></span></span>\n              </div>\n            </div>',
      clickPos: { x: 405, y: 107 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(2)>div>span>span>img',
      id: null,
      class: [],
      tag: 'img',
      nthChild: ':nth-child(1)',
      attributes: [
        '[alt="img-show-password"]',
        '[src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg"]',
      ],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":232,"screenY":254,"clientX":232,"clientY":120,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":232,"pageY":120,"x":232,"y":120,"offsetX":112,"offsetY":12,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":232,"layerY":120,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":26679.45499997586,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{"id":""},"9":{"id":""},"10":{"id":""},"11":{},"12":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<img alt="img-show-password" src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg">',
      clickPos: { x: 232, y: 120 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(2)>div>span>span>img',
      id: null,
      class: [],
      tag: 'img',
      nthChild: ':nth-child(1)',
      attributes: [
        '[alt="img-show-password"]',
        '[src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg"]',
      ],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":232,"screenY":254,"clientX":232,"clientY":120,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":232,"pageY":120,"x":232,"y":120,"offsetX":112,"offsetY":12,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":232,"layerY":120,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":28243.299999972805,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{"id":""},"9":{"id":""},"10":{"id":""},"11":{},"12":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<img alt="img-show-password" src="/static/media/icon_eye_none_TELUS_Green.a32ab1c0.svg">',
      clickPos: { x: 232, y: 120 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(3)>label>input',
      id: null,
      class: ['.sc-AykKK', '.dGrzVI'],
      tag: 'input',
      nthChild: ':nth-child(1)',
      attributes: ['[type="checkbox"]', '[name="rememberMe"]'],
      innerHtml: '',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":18,"screenY":274,"clientX":18,"clientY":140,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":18,"pageY":140,"x":18,"y":140,"offsetX":8,"offsetY":9,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":18,"layerY":140,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":29822.83499999903,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{"id":""},"9":{},"10":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html:
        '<input type="checkbox" name="rememberMe" class="sc-AykKK dGrzVI">',
      clickPos: { x: 18, y: 140 },
    },
  },
  {
    identifers: {
      xPath:
        'html>body>div:nth-child(4)>div>div:nth-child(2)>form>div:nth-child(4)>button',
      id: null,
      class: ['.sc-AykKH', '.yJiUj'],
      tag: 'button',
      nthChild: ':nth-child(1)',
      attributes: ['[type="submit"]'],
      innerHtml: 'Login',
    },
    page: 'http://127.0.0.1:5500/demo.html',
    opt: 'click',
    data: {
      event:
        '{"isTrusted":true,"screenX":25,"screenY":305,"clientX":25,"clientY":171,"ctrlKey":false,"shiftKey":false,"altKey":false,"metaKey":false,"button":0,"buttons":0,"relatedTarget":null,"pageX":25,"pageY":171,"x":25,"y":171,"offsetX":17,"offsetY":6,"movementX":0,"movementY":0,"fromElement":null,"toElement":{"id":""},"layerX":25,"layerY":171,"getModifierState":{},"initMouseEvent":{},"view":"Window","detail":1,"sourceCapabilities":{"firesTouchEvents":false},"which":1,"initUIEvent":{},"NONE":0,"CAPTURING_PHASE":1,"AT_TARGET":2,"BUBBLING_PHASE":3,"type":"click","target":{"id":""},"currentTarget":{},"eventPhase":3,"bubbles":true,"cancelable":true,"defaultPrevented":false,"composed":true,"timeStamp":31590.154999983497,"srcElement":{"id":""},"returnValue":true,"cancelBubble":false,"path":{"0":{"id":""},"1":{"id":""},"2":{"id":""},"3":{"id":""},"4":{"id":""},"5":{"id":""},"6":{"id":""},"7":{"id":""},"8":{},"9":"Window"},"composedPath":{},"stopPropagation":{},"stopImmediatePropagation":{},"preventDefault":{},"initEvent":{}}',
      el_html: '<button type="submit" class="sc-AykKH yJiUj">Login</button>',
      clickPos: { x: 25, y: 171 },
    },
  },
];
