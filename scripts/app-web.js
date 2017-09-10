var textarea = document.querySelector('#textoLista');
window.onload = function() {
    textarea.value = '';
  };
document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all of the forecasts
    document.location.reload(true);
});

// inputs forms
var list = document.getElementById('listaFeitas');

function addListToLists() {
    var firstname = document.getElementById('textoLista').value;
    textarea.value = '';
    var entry = document.createElement('li');
    entry.className = "listDown";
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
    // document.getElementById('listaFeitas li').innerHTML = "item";
}


