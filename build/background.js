
chrome.browserAction.onClicked.addListener(tab => {
  chrome.browserAction.setBadgeBackgroundColor({
    color: "#ffffff"
  }, () => console.log("lol?"))
});