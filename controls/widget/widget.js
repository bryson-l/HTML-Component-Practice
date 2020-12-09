const template = document.createElement('template')
template.innerHTML = `<style>
                      .widget-container {
                          background-color: rgb(225, 229, 230);
                          border-radius: 5px;
                          color: rgb(125, 125, 125);
                          display: flex;
                      }
                      .widget-content {
                          background-color: white;
                          border-radius: 5px;
                      }
                      </style>
                      <div class="widget-container">
                        <h2 style="margin-left:5px;"></h2>
                        <div class="widget-content">
                        </div>
                      </div>`

class WidgetComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title')
    }
}
window.customElements.define('widget-component', WidgetComponent)