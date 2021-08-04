const LOADED = {};

const MSG_INIT = 'init';
const MSG_ERROR = 'error';

let endpoint, key;

function sendMessage(action, content) {
    return chrome.tabs.query({ active: true, lastFocusedWindow: true }, async tabs => {
        return chrome.tabs.sendMessage(tabs[0].id, { action: action, content: content });
    });
}

async function storage() {
    return new Promise(function(resolve, reject) {
        return chrome.storage.sync.get({ endpoint: null, key: null }, async items => {
            endpoint = items.endpoint;
            key = items.key;

            return resolve();
        });
    });
}

async function load(tab) {
    if (LOADED[tab.id] && LOADED[tab.id][tab.url]) {
        return;
    }

    if (!LOADED[tab.id]) {
        LOADED[tab.id] = {};
    }

    LOADED[tab.id][tab.url] = true;

    await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['pwdmngr.css']
    }).catch(error => console.log(error));

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['templates.js']
    }).catch(error => console.log(error));

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['pwdmngr.js']
    }).catch(error => console.log(error));

    await storage();
}

chrome.action.onClicked.addListener(async (tab) => {
    await load(tab);

    if (!endpoint || !key) {
        return sendMessage(MSG_ERROR, 'API KEY is not configured.<br>Go to Extensions &rarr; Settings &rarr; Options');
    }

    sendMessage(MSG_INIT, { endpoint: endpoint, apikey: key, url: tab.url });
});
