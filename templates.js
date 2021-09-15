function pwdmngrTemplates(name) {
    switch (name) {
        case 'MODAL':
            return `
                <div id="js-pwdmngr-modal" class="pwdmngr-modal">
                    <div class="pwdmngr-modal__inner">
                        <header id="js-pwdmngr-header" class="pwdmngr-modal__header">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><style>.cls-1{fill:#fff}.cls-2{fill:#717172}</style></defs><circle cx="40" cy="37.82" r="36.59" class="cls-1"/><path d="M62.24 54.91H17.76A1.91 1.91 0 0 1 15.88 53V20.46a1.92 1.92 0 0 1 1.88-2h44.48a1.92 1.92 0 0 1 1.88 2V53a1.91 1.91 0 0 1-1.88 1.91ZM17.76 19.28a1.16 1.16 0 0 0-1.13 1.18V53a1.15 1.15 0 0 0 1.13 1.17h44.48A1.15 1.15 0 0 0 63.37 53V20.46a1.16 1.16 0 0 0-1.13-1.18Z" class="cls-2"/><path d="M62.24 55.06H17.76a2.07 2.07 0 0 1-2-2.1v-32.5a2.07 2.07 0 0 1 2-2.1h44.48a2.07 2.07 0 0 1 2 2.1V53a2.07 2.07 0 0 1-2 2.06ZM17.76 18.65A1.78 1.78 0 0 0 16 20.46V53a1.78 1.78 0 0 0 1.74 1.81h44.5A1.78 1.78 0 0 0 64 53V20.46a1.78 1.78 0 0 0-1.74-1.81Zm44.48 35.63H17.76A1.3 1.3 0 0 1 16.49 53V20.46a1.3 1.3 0 0 1 1.27-1.32h44.48a1.3 1.3 0 0 1 1.27 1.32V53a1.3 1.3 0 0 1-1.27 1.28ZM17.76 19.43a1 1 0 0 0-1 1V53a1 1 0 0 0 1 1h44.48a1 1 0 0 0 1-1V20.46a1 1 0 0 0-1-1Z" class="cls-2"/><path d="M16.25 22.94h47.49v.75H16.25z" class="cls-2"/><path d="M63.89 23.84H16.11v-1h47.78Zm-47.49-.29h47.2v-.47H16.4Zm3.33-2.38a.79.79 0 1 1-.79-.79.79.79 0 0 1 .79.79Zm2.36 0a.79.79 0 0 1-1.58 0 .79.79 0 0 1 1.58 0Zm2.37 0a.79.79 0 1 1-.79-.79.79.79 0 0 1 .79.79Zm2.81 14.47h3.88v3.88h-3.88zm7.19 0h3.88v3.88h-3.88zm7.2 0h3.88v3.88h-3.88zm7.19 0h3.88v3.88h-3.88z" class="cls-2"/><path d="M40 .69a37.13 37.13 0 1 0 37.12 37.13A37.17 37.17 0 0 0 40 .69Zm35.82 37.13A35.82 35.82 0 1 1 40 2a35.86 35.86 0 0 1 35.82 35.82Z" class="cls-2"/><circle cx="20.33" cy="62.09" r="16.94" class="cls-1"/><path d="M20.35 79.31A17.54 17.54 0 0 1 6.13 72a17.45 17.45 0 0 1 17-27.42 17.47 17.47 0 0 1-2.82 34.7Zm-.06-33.88A16.42 16.42 0 0 0 7 71.41a16.48 16.48 0 0 0 13.36 6.84A16.41 16.41 0 0 0 23 45.65a17.46 17.46 0 0 0-2.71-.22Z" class="cls-2"/><path fill="#d71920" d="M27.6 54.82a5.78 5.78 0 0 0-9.6 5.86l-6.5 6.5a.54.54 0 0 0-.15.38v3a.52.52 0 0 0 .52.52h3a.51.51 0 0 0 .37-.15l.74-.75a.49.49 0 0 0 .15-.43l-.09-.8 1.11-.1a.51.51 0 0 0 .47-.47l.1-1.11.8.09a.5.5 0 0 0 .41-.12.55.55 0 0 0 .18-.4v-1h1a.52.52 0 0 0 .37-.16l1.35-1.33A5.68 5.68 0 0 0 27.6 63a5.79 5.79 0 0 0 0-8.18Zm-1.49 3.71a1.57 1.57 0 1 1 0-2.22 1.57 1.57 0 0 1 0 2.22Z"/></svg>

                            <h1 class="pwdmngr-modal__title">Password Manager</h1>

                            <a id="js-pwdmngr-close" class="pwdmngr-modal__close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs/><g data-name="Layer 2"><path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" data-name="close"/></g></svg>
                            </a>
                        </header>

                        <div id="js-pwdmngr-search" class="pwdmngr-modal__box">
                            <input type="search" id="js-pwdmngr-search-input" value="" placeholder="Search..." class="pwdmngr-modal__input" />
                        </div>

                        <div id="js-pwdmngr-content" class="pwdmngr-modal__content"> ... </div>

                        <div id="js-pwdmngr-api-secret" class="pwdmngr-modal__box pwdmngr-modal__hidden">
                            <input type="password" id="js-pwdmngr-api-secret-input" value="" placeholder="Your API Secret" class="pwdmngr-modal__input" />
                        </div>

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
