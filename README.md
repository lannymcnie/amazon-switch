#Amazon Switcher

##Description
When browsing a product page on http://www.amazon.ca or http://amazon.com in Google Chrome, 
this extension will become enabled, and link to the opposite site using the product title as 
the search term.
 
It will not find the exact product, just a search based on the title.

##Usage

Click the button when on an Amazon product page. 

###Installation

1. You must have developer mode enabled in Chrome.
2. Browse to the extensions page by going to Window » Extensions, or chrome://extensions
3. Drag the crx file into the page. It will install and enable.

You must have an extensions bar visible in the browser.

###Building

In the extensions page in Chrome, click "Pack Extension". Point to the `src/` folder, and select
the `amazon-switch.pem` file for the app key. Using the same key will allow us to update the extension
once it is published.