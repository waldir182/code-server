// Enumerar lineas 
const enumerar = () => {
  let lineas = document.querySelectorAll('.line');
  lineas.forEach((linea, index) => {
    linea.setAttribute('data-n', index + 1);
  })
}

export default enumerar;