

 chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  //  alert("tab updated");
   if (tab.url !== null){

     shib_url = "shib.ncsu.edu";

     if (tab.url.indexOf(shib_url) !== -1){
      //  console.log("starting to send message");
       chrome.tabs.sendMessage(tabId, {greeting: "hello"}, function(response) {
         console.log("Message Sent");
       });

     }

  //  chrome.tabs.sendMessage(tabId, {greeting: "hello"}, function(response) {
    //  console.log("Message Sent");
  //  });
 }

  // chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});


 });
 // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    // console.log("Behekjdk");
  // });
// });


// chrome.tabs.onCreated.addListener(function (tab) {
//     alert("Yo Yo");
//   });

// chrome.browserAction.onClicked.addListener(function(tab) {
  // alert("yo yo");
    // chrome.tabs.executeScript({code:"console.log('background script')"});
    // chrome.tabs.executeScript({file:"javascript/content_script.js"});
// });

// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     alert(url);
// });
