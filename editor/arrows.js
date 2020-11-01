const d = document;
const arrowBtn = (e, pos) => {
  
  let ls = d.querySelectorAll('.line');
  let textarea = d.querySelector('#textarea');
  let lineaActual = d.querySelector('.line.active');
  let n = lineaActual.getAttribute('data-n');
  let lineaAnterior = d.querySelector(`[data-n="${n - 1}"]`);
  let lineaSiguiente = d.querySelector(`[data-n="${parseInt(n)+1}"]`);
  
  switch (e.keyCode) {
    case 37: //left
      if (textarea.value==='') {
        lineaActual.classList.remove('active');
        lineaAnterior.classList.add('active');
        console.log('yeah');
      }
      break;
    case 38: //top
      if (n>1){
        lineaActual.classList.remove('active');
        lineaAnterior.classList.add('active');
        console.log('yeah');
        textarea.value = lineaAnterior.textContent;
        textarea.selectionStart=3;
        textarea.selectionEnd=3;
      }
      break;
    case 39: //right
      break;
    case 40: //bottom
      if (n<ls.length) {
        lineaActual.classList.remove('active');
        lineaSiguiente.classList.add('active');
        textarea.value = lineaSiguiente.textContent;
        e.preventDefault()
      }
      break;
  }
}

export default arrowBtn;



