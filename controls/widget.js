const template = document.createElement('template')
template.innerHTML = `<style>
                      .widget-container {
                          background-color: rgb(225, 229, 230);
                          border-radius: 5px;
                          color: rgb(125, 125, 125);
                          display: flex;
                          flex-flow: row wrap;
                          margin: 5px;
                      }
                      .widget-content {
                          background-color: white;
                          border-radius: 5px;
                          margin: 10px;
                          padding:10px 0 10px 10px;
                          margin-top: 0;
                          flex: 1 100%;
                      }
                      h2 {
                          flex: 1 100%;
                      }
                      </style>
                      <div class="widget-container">
                        <h2 style="margin:5px 0 5px 10px;">DEFAULT TEXT</h2>
                        <div class="widget-content">
                            <slot name="widget-content">DEFUALT TEXT</slot>
                        </div>
                      </div>` // the widget-content needs the flex attribute so that the widget will always have the white background taking up the full space

class WidgetComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); // add the component to the shadow DOM -> does not render until it is called
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {// need to get the attributes in the connectedCallback function because they may not be set when the constructor function runs
        let title = this.getAttribute('title')
        this.shadowRoot.querySelector('h2').innerText = title
    }
}
window.customElements.define('widget-component', WidgetComponent)