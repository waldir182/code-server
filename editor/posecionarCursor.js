function posicionCursor(id) {
  var tb = document.getElementById(id)
  var cursor = -1;

  // IE
  if (document.selection && (document.selection != 'undefined')) {
    var _range = document.selection.createRange();
    var contador = 0;
    while (_range.move('character', -1))
      contador++;
    cursor = contador;
  }
  // FF
  else if (tb.selectionStart >= 0)
    cursor = tb.selectionStart;

  return cursor;
}

const posesionarCursor = () => {
  let conteEditor=document.querySelector('.contenedor-editor');
  let cursor = document.querySelector('.cursor');
  let line = document.querySelector('.line.active');

  let posY = cursor.getBoundingClientRect().y;
  let posX = cursor.getBoundingClientRect().x;
  let posCursor = posicionCursor('textarea');
  //console.log(posY, posX);
  cursor.style.top=`${line.getBoundingClientRect().y-conteEditor.getBoundingClientRect().y}px`;
  cursor.style.left=`${posCursor*9.58}px`;

}

export default posesionarCursor;
