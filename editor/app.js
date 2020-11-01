import simulateClick from "./simulateClick.js";
import enumerar from "./enumerar.js";
import { posicionCursor, getCaret } from "./demo.js";
import posecionarCursor from "./posecionarCursor.js";
import setPosition from "./setPosition.js";
import colored from "./coloredSuntax.js";
import arrowBtn from "./arrows.js";

const d = document;
let language = "javascript";
let editor = d.querySelector(".editor");
let textarea = d.querySelector("textarea");
var positionLine;

// evento keyup
d.addEventListener("keyup", (e) => {
  //console.log("Position textarea:", posicionCursor("textarea"));
  let lineActive = e.target.querySelector(".line.active");
  if (/\t/g.test(editor.textContent)) {
    editor.innerHTML = editor.innerHTML.replace(/\t/g, "  ");
    editor.selectionEnd = 2;
    console.log(editor.selectionStart);
  }
  editor.querySelector(".line.active").innerHTML = textarea.value;
  colored();
  enumerar();
  posecionarCursor();
});

//evitar borrar la ultima linea
d.addEventListener("keydown", (e) => {
  textarea.focus();
  
  let lineas = d.querySelectorAll(".line");
  let lineaActiva = editor.querySelector(".line.active");
  if (e.keyCode === 8 && textarea.value == "") {
    if (lineas.length <= 1) {
      return false;
    }
    let lineaActivaN = lineaActiva.getAttribute("data-n");
    let lineaAnterior = editor.querySelector(`[data-n="${lineaActivaN - 1}"]`);
    lineaAnterior.classList.add("active");
    textarea.value = lineaAnterior.textContent;
    lineaActiva.remove();
    e.preventDefault();
  }
  if (e.keyCode === 13) {
    let lineaActiva = editor.querySelector(".line.active");
    let nuevaLinea = d.createElement("div");
    nuevaLinea.classList.add("line", "active");
    editor.appendChild(nuevaLinea);
    lineaActiva.classList.remove("active");
    textarea.value = "";
    e.preventDefault();
  }
  arrowBtn(e, posicionCursor("textarea"));
});

// d.querySelector('.editor').addEventListener('click', (e) => {
//   let posEditor = getCaret(d.querySelector('.editor'))
//   console.log(posEditor);
// })
editor.addEventListener("click", (e) => {
  //textarea.focus();
  //posecionarCursor();
});
editor.addEventListener("select", (e) => {});
d.addEventListener("click", (e) => {
  if (true) {
    //console.log("Posicion line: ", getCaret(e.target));
    let conteEditor = document.querySelector(".contenedor-editor");

    let cursor = document.querySelector(".cursor");
    let line = document.querySelector(".line.active");

    let posY = cursor.getBoundingClientRect().y;
    let posX = cursor.getBoundingClientRect().x;
    let touchX = e.clientX;
    let dif= touchX-line.getBoundingClientRect().x;
    let posCursor = getCaret(e.target);//obtener coordenadas
    let dis=Math.round(Math.round(dif)/10);
    cursor.style.top = `${
      line.getBoundingClientRect().y - conteEditor.getBoundingClientRect().y
    }px`;
    textarea.selectionStart=dis;
    textarea.selectionEnd=dis;
    cursor.style.left = `${getCaret(d.querySelector('.line.active'))*9.58}px`;
    //console.log(Math.round(Math.round(dif)/10));
    
  }
});
