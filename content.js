// chrome.tabs.onCreated.addListener(function(tab) {
// alert("Tab created");
// console.log(
//     'tabs.onCreated -- window: ' + tab.windowId + ' tab: ' + tab.id +
//     ' title: ' + tab.title + ' index ' + tab.index + ' url ' + tab.url);
// });
//
//
// alert("Hello from your Chrome extension!");
//
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       alert("Message passed");
//       // This line is new!
//     }
//   }
// );
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    // console.log(sender.tab ?
                // "from a content script:" + sender.tab.url :
                // "from the extension");
    if (request.greeting == "hello"){
      console.log("Wohooo");
      document.getElementById("formSubmit").click();
      // alert("Wohooo");
    }
      // sendResponse({farewell: "goodbye"});
  });
