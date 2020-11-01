function setPosition(pos, idElemento) {
    var elemento = document.getElementById(idElemento);
    if (typeof document.selection != 'undefined' && document.selection) {        //método IE
        var tex = elemento.value;
        elemento.value = '';
        elemento.focus();
        var str = document.selection.createRange();
        elemento.value = tex;
        str.move("character", pos); str.moveEnd("character", 0); str.select();
    } else if (typeof elemento.selectionStart != 'undefined') {                    //método estándar
        elemento.setSelectionRange(pos, pos);
    }
}
export default setPosition;