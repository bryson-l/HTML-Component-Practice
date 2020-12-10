const topbar = document.createElement('template')
topbar.innerHTML = `<style>
                        .top-bar {
                            display: inline-block;
                            width: 100%;
                            height: 80px;
                            background: linear-gradient(90deg, rgba(15,11,98,1) 0%, rgba(25,25,156,1) 100%);
                            text-align: center;
                            color:white;
                        }
                      </style>
                      <div class="top-bar">
                        <h1>All About the NFL</h1>
                      </div>`

class TopbarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(topbar.content.cloneNode(true));
    }
}
window.customElements.define('topbar-component', TopbarComponent)