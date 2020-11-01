function getCaret(element) {

  var caretOffset = 0;

  var doc = element.ownerDocument || element.document;

  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
}


function setCaret(id) {
  var el = document.getElementById(id)
  var range = document.createRange()
  var sel = window.getSelection()
  console.log(el.childNodes);

  range.setStart(el.childNodes[el.childNodes.length - 1], 3)
  range.collapse(true)

  sel.removeAllRanges()
  sel.addRange(range);
}


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

export {
  posicionCursor,
  setCaret,
  getCaret
};