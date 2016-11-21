chrome.tabs.onCreated.addListener(function(tab) {
alert("Tab created");
console.log(
    'tabs.onCreated -- window: ' + tab.windowId + ' tab: ' + tab.id +
    ' title: ' + tab.title + ' index ' + tab.index + ' url ' + tab.url);
});


chrome.tabs.onUpdated.addListener(function(tabId, props) {
  // alert("tab updated");
  tab_name = props.url;
  console.log(
      'tabs.onUpdated -- tab: ' + tabId + ' status ' + props.status +
      ' url ' + props.url);
});
