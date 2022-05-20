
// Lego version undefined
import { h, Component } from 'https://unpkg.com/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("section", {}, [
    h("div", {"class": `border-section space-y`, "style": `text-align: center`}, [
    h("h3", {}, `Simple JS Modal`)
]),
    h("div", {"style": `text-align: center`}, [
    h("button", {"id": `modal-trigger`, "onclick": this.openModal.bind(this), "class": `link-trigger`}, `Fire Modal
    `)
]),
    ((state.showModal) ? h("div", {"id": `modal`}, [
    h("div", {"class": `content`}, [
    h("h2", {}, `Success!`),
    h("p", {}, `The Modal Works - Respect! You can click 'close' or hit the Escape button on your keyboard.`),
    h("button", {"id": `close-modal`, "onclick": this.closeModal.bind(this)}, `Close`)
])
]) : '')
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
    a {
    font-weight: bold;
    color: #40508f;
    transition: color 0.3s;
  }

  a:hover {
    color: #333545;
  }

  #modal-trigger {
    width: 175px;
    padding: 10px 15px;
    border-radius: 18px;
    background-color: #0496a4;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: 300;
    display: block;
    margin: 32px auto;
  }

  #modal {
    /* the modal is on top of the main content and covers the entire wieport*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.2s, visibility 0.2s;
  }

  #modal .content {
    /* center modal content */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    /* content basic style */
    width: 90%;
    max-width: 400px;
    padding: 2em;
    background-color: #adf5ff;
    color: #333;
  }

  #modal h2 {
    margin-top: 0;
  }

  #modal p {
    line-height: 1.3;
  }

  #modal button {
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    color: #fff;
    background-color: #40508f;
    padding: 0.5em 0.8em;
    font-size: 14px;
    font-weight: bold;
    transition: background 0.3s;
  }

  #modal button:hover {
    background-color: #333545;
  }

  p {
    margin-bottom: 2em;
    color: #666;
  }

  .btn-open {
    display: none;
  }
  .btn-open.is-active {
    display: block;
  }

  button {
    font-size: 1.25em;
    font-weight: bold;
    background-color: #000;
    border: none;
    padding: 0.5em 1em;
    color: #fff;
    box-shadow: 0 0 0 2px #000 inset;
    border-radius: 0.25em;
    cursor: pointer;
    transition: background 0.4s ease, color 0.4s ease;
  }
  button:hover {
    box-shadow: 0 0 0 2px #000 inset;
    color: #000;
    background-color: transparent;
  }
  `)}
}



export default class extends Lego {
    openModal(event) {
       this.render({ showModal: true })
    }
    
    closeModal(event) {
        this.render({ showModal: false })
    }

    init() {
        this.state = {
            showModal: false
        }
    }
  }
