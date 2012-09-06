chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab.url.indexOf('twitter.github.com/bootstrap/customize.html') > -1) {
			chrome.pageAction.show(tabId);
	}
});