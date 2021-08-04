const $save = document.getElementById('save');

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({ endpoint: '', key: '' }, items => {
        document.getElementById('endpoint').value = items.endpoint;
        document.getElementById('key').value = items.key;
    });
});

$save.addEventListener('click', () => {
    const endpoint = document.getElementById('endpoint').value.replace(/\/*$/, '');
    const key = document.getElementById('key').value;

    chrome.storage.sync.set({ endpoint: endpoint, key: key }, () => {
        $save.classList.add('success');
        setTimeout(() => $save.classList.remove('success'), 1000);
    });
});