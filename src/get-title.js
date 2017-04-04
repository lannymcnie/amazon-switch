chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	var title = document.querySelectorAll("#productTitle,#ebooksProductTitle")[0];
	sendResponse(title.innerText);
});