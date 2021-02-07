import { Leaf } from './Leaf.js'
import { Tree } from './Tree.js'
const template = document.createElement("template");
template.innerHTML = /*html*/`
  <div id="customTree">`;
  const structure = ["id1", "id2", "id3", ["id4","id5",["id6", "id7"], "id8"], "id9"];

class MyCustomTree extends HTMLElement{
    constructor() {
      super();
      this.count = 0;
      this.Leaf = new Leaf;
      this.Tree = new Tree;
      this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.getNextCount();
    this.myfunct();
  }


  getNextCount(){
    return (this.count++);
  }
  myfunct(){
    let qwwe1111 = this.createTree(structure);
    console.log(qwwe1111);
    this.shadowRoot.getElementById("customTree").innerHTML = qwwe1111
  }

  createTree(myArr){
    let myTree = "<ul>";
    let myElem = this.shadowRoot.getElementById("customTree");
    let newElem = null;
    let parentElem = null;
    for (let i = 0; i < myArr.length; i++){
      if(typeof(myArr[i])=="object"){
        myTree = myTree+this.Tree.addTree()+"<ul>"+this.createTree(myArr[i])+"</ul>"
      }
      else{
        myTree = myTree+"<li>"+this.Leaf.addLeaf(this.getNextCount())+"</li>";
      }
    }
    return myTree+"</ul>";
  }
}


customElements.define("my-custom-tree", MyCustomTree);
