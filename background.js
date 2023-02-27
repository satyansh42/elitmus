// chrome.action.onClicked.addListener((tab)=>{
//     console.log('chrome.browserAction.onClicked', tab)
//     alert('hello')
// })
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

chrome.tabs.remove(getCurrentTab().id);

chrome.tabs.onCreated.addListener(function(tab) {
    
        chrome.tabs.remove(tab.id, function() { });
    
})

chrome.action.onClicked.addListener(function(tab) {
    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     files: ["fullscreen.js"]
    // });
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });