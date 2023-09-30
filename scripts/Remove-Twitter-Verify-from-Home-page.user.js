// ==UserScript==
// @name         Remove Twitter Verify buttons and banners
// @description  Removes Verify banner from Home page and Verified button on side pannel.
// @version      1.2
// @author       yungsamd17
// @namespace    https://github.com/yungsamd17/UserScripts
// @license      MIT License
// @downloadURL  https://github.com/yungsamd17/UserScripts/raw/main/scripts/Remove-Twitter-Verify-from-Home-page.user.js
// @updateURL    https://github.com/yungsamd17/UserScripts/raw/main/scripts/Remove-Twitter-Verify-from-Home-page.user.js
// @icon         https://raw.githubusercontent.com/yungsamd17/UserScripts/main/scripts/icons/Remove-Twitter-Verified.png
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @match        https://x.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const css = `
    a[aria-label="Verified"], [aria-label="Get Verified"], [aria-label="Subscribe to Premium"], [aria-label="Premium"] {
      display: none !important;
    }
    `;

    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css);
    } else {
        const styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        document.head.appendChild(styleNode);
    }
})();