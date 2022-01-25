(function() {
    this.DEBUG = false;

    this.ENDPOINT = '';
    this.APIKEY = '';
    this.URL = '';

    this.ICON_APIKEY = 'icon-apikey';
    this.ICON_WARNING = 'icon-warning';
    this.ICON_NO_RESULTS = 'icon-no-results';

    this.DRAG = false;

    this.POSITION_X = 0;
    this.POSITION_Y = 0;

    this.ELEMENT_X = 0;
    this.ELEMENT_Y = 0;

    this.log = function() {
        if (this.DEBUG) {
            Array.prototype.slice.call(arguments).forEach(element => console.log(element));
        }
    };

    this.$modal = function() {
        return document.getElementById('js-pwdmngr-modal');
    }

    this.$header = function() {
        return document.getElementById('js-pwdmngr-header');
    }

    this.$closeBtn = function() {
        return document.getElementById('js-pwdmngr-close');
    }

    this.$search = function() {
        return document.getElementById('js-pwdmngr-search');
    }

    this.$searchInput = function() {
        return document.getElementById('js-pwdmngr-search-input');
    }

    this.$content = function() {
        return document.getElementById('js-pwdmngr-content');
    }

    this.$apiSecret = function() {
        return document.getElementById('js-pwdmngr-api-secret');
    }

    this.$apiSecretInput = function() {
        return document.getElementById('js-pwdmngr-api-secret-input');
    }

    this.showError = function(message, icon) {
        let iconTPL = '';

        switch (icon) {
            case this.ICON_APIKEY:
                iconTPL = pwdmngrTemplates('ICON_APIKEY');
                break;

            case this.ICON_WARNING:
                iconTPL = pwdmngrTemplates('ICON_WARNING');
                break;

            case this.ICON_NO_RESULTS:
                iconTPL = pwdmngrTemplates('ICON_NO_RESULTS');
                break;
        }

        this.$content().innerHTML = `
            <p class="pwdmngr-modal__error">
                <span class="pwdmngr-modal__icon">${ iconTPL }</span>
                ${ message }
            </p>
        `;
    };

    this.showCredentialList = function(credentialList) {
        this.log('[password-manager] Showing User List', credentialList);

        this.$content().innerHTML = `
            <ul class="pwdmngr-modal__list">`
                + this.showCredentialListHeader()
                + credentialList.map(item => this.showCredentialListItem(item)).join('')
            + `</ul>`;

        this.$content().querySelectorAll('[data-credential]').forEach(item => {
            item.addEventListener('click', () => this.copy(item));
        });
    };

    this.showCredentialListHeader = function() {
        return `<li class="pwdmngr-modal__list-heading">`
            + `<span class="pwdmngr-modal__list-name">CREDENTIAL</span>`
            + `<span class="pwdmngr-modal__list-option">USER</span>`
            + `<span class="pwdmngr-modal__list-option">PASSWORD</span>`
            + `</li>`;
    };

    this.showCredentialListItem = function(item) {
        return `<li class="pwdmngr-modal__list-item">`
            + `<span class="pwdmngr-modal__list-name" title="${ item.name }">${ item.name }</span>`
            + `<span class="pwdmngr-modal__list-option" data-credential data-credential-id="${ item.id }" data-credential-type="user">${ pwdmngrTemplates('ICON_COPY') }</span>`
            + `<span class="pwdmngr-modal__list-option" data-credential data-credential-id="${ item.id }" data-credential-type="password">${ pwdmngrTemplates('ICON_COPY') }</span>`
            + `</li>`
    };

    this.showApiSecret = function(item) {
        this.$search().classList.add('pwdmngr-modal__hidden');
        this.$content().classList.add('pwdmngr-modal__hidden');
        this.$apiSecret().classList.remove('pwdmngr-modal__hidden');
    };

    this.apiSecretInput = function(e) {
        e.preventDefault();

        const value = this.$apiSecretInput().value;

        if (!value.length) {
            return;
        }

        if ((e.code !== 'Enter') && (e.code !== 'NumpadEnter')) {
            return;
        }

        this.$apiSecret().classList.add('pwdmngr-modal__hidden');
        this.$content().classList.remove('pwdmngr-modal__hidden');

        this.apiSearch({
            api_secret: value,
            q: this.URL
        });
    };

    this.request = async function(url, body) {
        this.log('[password-manager] requesting Data');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this.APIKEY
            },
            body: JSON.stringify(body)
        });

        const text = await response.text();
        let data;

        try {
            data = JSON.parse(text);
        } catch (e) {
            return this.showError('Can not load url ' + url + ': ' + text, this.ICON_WARNING);
        }

        if (response.ok) {
            return data;
        }

        if (data.status === 'api_secret_required') {
            return this.showApiSecret();
        }

        return this.showError('Can not load url ' + url + ': ' + data.message + '', this.ICON_WARNING);
    };

    this.apiSearch = async function(query) {
        this.log('[password-manager] Checking credentials...');

        if (typeof query === 'string') {
            query = { q: query };
        }

        const data = await this.request(this.ENDPOINT + '/app/api/search', query);

        if (!data) {
            return;
        }

        if (!data.length) {
            return this.showError(`<span>No results, but you can add them through <a href="${ this.ENDPOINT }" target="_blank">WEB PANEL</a>.</span>`, this.ICON_NO_RESULTS)
        }

        this.showCredentialList(data);
    };

    this.searchUrl = function() {
        this.apiSearch(this.URL);
    };

    this.searchInput = function(e) {
        const value = this.$searchInput().value;

        if (e.code === 'Escape') {
            return this.apiSearch(this.URL);
        }

        if ((e.code !== 'Enter') && (e.code !== 'NumpadEnter')) {
            return;
        }

        e.preventDefault();

        if (!value.length) {
            return this.apiSearch(this.URL);
        }

        this.apiSearch(value);
    };

    this.clipboard = function(text) {
        const element = document.createElement('textarea');

        element.style = 'position: absolute; width: 1px; height: 1px; left: -10px; top: -10px';
        element.value = text;

        document.body.appendChild(element);

        element.select();
        element.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(element);
    };

    this.copy = async function(el) {
        const data = await this.request(this.ENDPOINT + '/app/api/' + el.dataset.credentialId + '/payload/' + el.dataset.credentialType);

        if (!data) {
            return;
        }

        this.clipboard(this.decode(data.value));

        const text = el.innerHTML;

        el.innerHTML = 'Copied!';

        setTimeout(() => el.innerHTML = text, 1000);
    };

    this.decode = function(encoded) {
        const hex = atob(encoded).split('\\x');
        let decoded = '';

        for (let i = 0; i < hex.length; i++) {
            decoded += this.hex2char(hex[i]);
        }

        return decoded;
    }

    this.hex2char = function(hex) {
        const groups = hex.match(/[\s\S]{2}/g) || [];
        let char = '';

        for (var i = 0, j = groups.length; i < j; i++) {
            char += '%' + ('0' + groups[i]).slice(-2);
        }

        return decodeURIComponent(char);
    }

    this.close = function() {
        if (!this.$modal()) {
            return;
        }

        this.$closeBtn().removeEventListener('click', e => this.close());

        this.$modal().parentElement.removeChild(this.$modal());
    };

    this.drag = function() {
        const $modal = this.$modal();
        const $header = this.$header();

        $header.onmousedown = () => this.dragStart($modal);
        $header.onmouseup = (e) => this.dragEnd();

        window.onmousemove = (e) => this.dragMove($modal, e);

        window.addEventListener('selectstart', this.dragTextSelect);
    };

    this.dragStart = function($modal) {
        this.DRAG = true;

        this.ELEMENT_X = this.POSITION_X - $modal.offsetLeft;
        this.ELEMENT_Y = this.POSITION_Y - $modal.offsetTop;
    };

    this.dragMove = function($modal, e) {
        this.POSITION_X = e.clientX;
        this.POSITION_Y = e.clientY;

        if (!this.DRAG) {
            return;
        }

        $modal.style.left = (this.POSITION_X - this.ELEMENT_X) + 'px';
        $modal.style.top = (this.POSITION_Y - this.ELEMENT_Y) + 'px';
    };

    this.dragEnd = function() {
        this.DRAG = false;
    };

    this.dragTextSelect = function(e) {
        if (this.DRAG) {
            e.preventDefault();
        }
    };

    this.createModal = function() {
        if (document.getElementById('js-pwdmngr-modal')) {
            return;
        }

        document.body.insertAdjacentHTML('beforeend', pwdmngrTemplates('MODAL'));

        this.drag();

        this.$closeBtn().addEventListener('click', e => this.close());

        this.$searchInput().addEventListener('input', e => this.searchInput(e));
        this.$searchInput().addEventListener('keyup', e => this.searchInput(e));

        this.$apiSecretInput().addEventListener('keyup', e => this.apiSecretInput(e));

        this.$content().innerHTML = `<div class="pwdmngr-modal__preloader">${ pwdmngrTemplates('PRELOADER') }</div>`;
    };

    this.setConfig = function(data) {
        this.ENDPOINT = data.endpoint;
        this.APIKEY = data.apikey;
        this.URL = data.url;

        document.getElementById('js-pwdmngr-webpanel').href = this.ENDPOINT;

        this.log('[password-manager] Setting Configuration');
        this.log('[password-manager] ENDPOINT', this.ENDPOINT);
        this.log('[password-manager] APIKEY', this.APIKEY);
        this.log('[password-manager] URL', this.URL);
    };

    this.init = function() {
        chrome.runtime.onMessage.addListener(this.initListener);

        this.log('[password-manager] Injected script NEW.');
    }

    this.initListener = function(request) {
        if (this.$modal()) {
            return;
        }

        this.log('[password-manager] request.action', request.action);

        this.createModal();

        switch (request.action) {
            case 'init':
                this.setConfig(request.content);
                this.searchUrl();
                break;

            case 'error':
                this.showError(request.content, this.ICON_APIKEY);
                break;
        }
    }

    this.init();
})();
