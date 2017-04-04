
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.amazon.com' },
			css: ["#productTitle,#ebooksProductTitle"]
          }),
		  new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostEquals: 'www.amazon.ca' },
			css: ["#productTitle,#ebooksProductTitle"]
		  })
		],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// Copyright (c) 2016 gskinner.com, inc
chrome.pageAction.onClicked.addListener(function(tab) {

	var domain = tab.url.match(/https?:\/\/www\.amazon\.(com|ca)/i);
	if (domain == null) { return; }
	var url = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=";
	if (domain[1] == "com") {
		url = "https://www.amazon.ca/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=";
	}

 	chrome.tabs.executeScript(tab.id, { file: "get-title.js" }, function() {
		chrome.tabs.sendMessage(tab.id, {}, function (title) {
			window.open(url + title);
		});
	});

});