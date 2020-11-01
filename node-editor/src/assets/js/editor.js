let cursorDiv = document.querySelector(".cursor");
console.log(cursorDiv.clientWidth);
console.log(cursorDiv.clientHeight);

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-run")) colored(e.target);
});

function colored(el) {
  let id = el.getAttribute("data-id");
  let textarea = document.getElementById(`textarea${id}`);
  let editor = document.querySelector(`.edit-code[data-id="${id}"]`);
  console.clear()
  let valor = textarea.value;
  valor = valor.replace(/.+/g, '<div>$&</div>')
  editor.innerHTML = valor;
  console.log(editor);
  
}
