const sidebar = document.createElement('template')
sidebar.innerHTML = `<style>
                        .side-bar {
                            display: inline-block;
                            background: linear-gradient(180deg, rgba(15,11,98,1) 0%, rgba(25,25,156,1) 100%);
                            width:200px;
                            height: 990px;
                            margin-top:0;
                            color: white;
                        }

                        .side-bar > ul {
                            list-style-type: none; /* this removes the bullets from the list element */
                            padding-left: 0;
                            margin-top:0;
                        }

                        .side-bar > ul > a > li { /* styles the side bar elements to navigate to other pages */
                            border: 2px solid grey;
                            font-size: 25px;
                            margin-top: 0;
                            background: linear-gradient(90deg, rgba(74,67,218,1) 0%, rgba(20,20,119,1) 100%);
                        }
                        a {
                            text-decoration: none;
                            color: white;
                        }
                      </style>
                      <div class="side-bar">
                        <ul>
                            
                        </ul>
                      </div>`

class SidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(sidebar.content.cloneNode(true));
    }
    connectedCallback() {// need to get the attributes in the connectedCallback function because they may not be set when the constructor function runs
        let items = this.getAttribute('items')
        this.shadowRoot.querySelector('ul').innerHTML = this.createListIndexHTML(items)
    }
    createListIndexHTML(stringArray) {
        let html = ""
        for (let index=0;index<JSON.parse(stringArray).length;index++) { // need to use JSON.parse because HTML attributes are passed as strings, not arrays
            let item = JSON.parse(stringArray)[index]
            if (item == "Home") {
                html += "<a href='../index.html'><li>" + JSON.parse(stringArray)[index] + "</li>\n"
            }
            else {
                html += "<a href='views/"+ item.toLowerCase() +".html'><li>" + JSON.parse(stringArray)[index] + "</li>\n"
            }
        }
        return html
    }
}
window.customElements.define('sidebar-component', SidebarComponent)