function pwdmngrTemplates(name) {
    switch (name) {
        case 'MODAL':
            return `
                <div id="js-pwdmngr-modal" class="pwdmngr-modal">
                    <div class="pwdmngr-modal__inner">
                        <header id="js-pwdmngr-header" class="pwdmngr-modal__header">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M0 0h24v24H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(.00781)"/></pattern><image id="image0" width="128" height="128" xlink:href="data:image/png;base64,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"/></defs></svg>

                            <h1 class="pwdmngr-modal__title">PasswordManager</h1>

                            <a id="js-pwdmngr-close" class="pwdmngr-modal__close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs/><g data-name="Layer 2"><path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" data-name="close"/></g></svg>
                            </a>
                        </header>

                        <div class="pwdmngr-modal__search">
                            <input type="search" id="js-pwdmngr-search" value="" placeholder="Search..." />
                        </div>

                        <div id="js-pwdmngr-content" class="pwdmngr-modal__content"> ... </div>

                        <footer class="pwdmngr-modal__footer">
                            <a class="pwdmngr-modal__link" id="js-pwdmngr-webpanel" href="" target="_blank">
                                <span class="pwdmngr-modal__link-text">Go to Web Panel &raquo;</span>
                            </a>
                        </footer>
                    </div>
                </div>
            `;

        case 'ICON_COPY':
            return `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 3h1.4a2.3 2.3 0 012.3 2.3v15a2.3 2.3 0 01-2.3 2.2H6.8a2.3 2.3 0 01-2.3-2.3v-15A2.2 2.2 0 016.8 3h1.5" stroke="#7BBFCC" stroke-width="1.5" stroke-linejoin="round"/><path d="M14.5 1.5h-5c-.7 0-1.3.5-1.3 1.2v.6c0 .7.6 1.2 1.3 1.2h5c.7 0 1.3-.5 1.3-1.2v-.6c0-.7-.6-1.2-1.3-1.2z" stroke="#7BBFCC" stroke-width="1.5" stroke-linejoin="round"/></svg>
            `;

        case 'ICON_WARNING':
            return `
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 41.8h32a3 3 0 002.6-4.4l-16-29.7a3 3 0 00-5.2 0l-16 29.7A3 3 0 008 41.8v0z" stroke="#F7B73B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.5 18.3l.5 11.5.5-11.5a.5.5 0 00-.5-.5v0a.5.5 0 00-.5.5v0z" fill="#F7B73B" stroke="#F7B73B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 36.6l-.7-.2-.4-.6a1.1 1.1 0 01.2-1.2l.7-.4.7.1.5.4a1.1 1.1 0 01-.1 1.5c-.3.2-.6.4-.9.4z" fill="#F7B73B"/></svg>
            `;

        case 'ICON_APIKEY':
            return `
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.2c0 1.2 0 2.4.3 3.5-4 4.7-14.7 17.3-15.7 18.2a1.9 1.9 0 00-.6 1.4c0 .8.5 1.6.9 2 .6.7 3.3 3.1 3.8 2.6l2.3-2.3c.9-.9-.1-2.7.2-3.4.3-.7.6-.9 1.2-1 .5 0 1.4.3 2.2.3.8 0 1.2-.3 1.8-.9.4-.4.8-.8.8-1.4 0-.9-1.2-2-.3-2.9.9-.9 2.2.6 3.2.5 1-.1 2.1-1.4 2.2-2 .2-.6-1-2-.9-2.9 0-.3.7-1 1.1-1 .4-.1 2.3.6 2.8.5.5 0 1.1-.6 1.6-1A11.4 11.4 0 0044 15.1C44 9 38.8 4 32.4 4 26 4 20.9 9 20.9 15.2zM38 13a3 3 0 11-6 0 3 3 0 016 0z" stroke="#EC5757" stroke-width="2" stroke-linejoin="round"/></svg>
            `;

        case 'ICON_NO_RESULTS':
            return `
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.4 34.5a18.4 18.4 0 10-2 1.9l7.8 7.6s.7.1 1.3-.5c.6-.6.5-1.3.5-1.3l-7.6-7.7zm-2.8-.9a15.8 15.8 0 114.7-11.2c0 4.2-1.7 8.3-4.7 11.2z" fill="#4095A5"/></svg>
            `;

        case 'PRELOADER':
            return `
                <svg width="48" height="48" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#4094a5">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                            <circle cx="5" cy="50" r="5">
                                <animate attributeName="cy"
                                     begin="0s" dur="2.2s"
                                     values="50;5;50;50"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                                <animate attributeName="cx"
                                     begin="0s" dur="2.2s"
                                     values="5;27;49;5"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5">
                                <animate attributeName="cy"
                                     begin="0s" dur="2.2s"
                                     from="5" to="5"
                                     values="5;50;50;5"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                                <animate attributeName="cx"
                                     begin="0s" dur="2.2s"
                                     from="27" to="27"
                                     values="27;49;5;27"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                            <circle cx="49" cy="50" r="5">
                                <animate attributeName="cy"
                                     begin="0s" dur="2.2s"
                                     values="50;50;5;50"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                                <animate attributeName="cx"
                                     from="49" to="49"
                                     begin="0s" dur="2.2s"
                                     values="49;5;27;49"
                                     calcMode="linear"
                                     repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                </svg>
            `;
    }
}
