let recordingBtn = document.getElementById('recording-btn');
let isRecording = localStorage['is-recording'] === 'true';
recordingBtn.innerText = isRecording ? 'Stop Recording' : 'Start Recording';
recordingBtn.style.color = isRecording ? 'red' : 'green';

recordingBtn.onclick = function (e) {
  isRecording = !isRecording;
  localStorage['is-recording'] = isRecording;
  recordingBtn.innerText = isRecording ? 'Stop Recording' : 'Start Recording';
  recordingBtn.style.color = isRecording ? 'red' : 'green';

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' }, function () {
      chrome.tabs.sendMessage(tabs[0].id, {
        isRecording,
      });
    });
  });
};
