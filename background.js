chrome.app.runtime.onLaunched.addListener(function() {
  // Tell your app what to launch and how.
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });

 //  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 //    alert(changeInfo.url);
 // });

 });

chrome.tabs.onCreated.addListener(function (tab) {
    alert("Yo Yo");
  });

// chrome.browserAction.onClicked.addListener(function(tab) {
  // alert("yo yo");
    // chrome.tabs.executeScript({code:"console.log('background script')"});
    // chrome.tabs.executeScript({file:"javascript/content_script.js"});
// });

// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     alert(url);
// });
