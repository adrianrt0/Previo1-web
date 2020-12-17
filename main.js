var edicion=false;

function HacerEditable(nodo) {

if (edicion == false) {
var nodoTd = nodo.parentNode; 
var nodoTr = nodoTd.parentNode; 
var nodotabladatos = document.getElementById('tabladatos');
var nodosEnTr = nodoTr.getElementsByTagName('td');
var alimento = nodosEnTr[0].textContent; 
var calorias = nodosEnTr[1].textContent;
var grasas = nodosEnTr[2].textContent; 
var proteina = nodosEnTr[3].textContent;
var carbohidratos = nodosEnTr[4].textContent; 
var opciones = nodosEnTr[5].textContent;
var nuevoHtml = '<td><input type="text" class="form-control" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+
'<td><input type="text" class="form-control" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+
'<td><input type="text" class="form-control" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+
'<td><input type="text" class="form-control" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+
'<td><input type="text" class="form-control" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td>' +
'<td><select class="seleccion"><option class="opciones" value="1">bien</option><option class="opciones" value="2">mal</option></select>' + '<td>En edición</td>';
nodoTr.innerHTML = nuevoHtml;
nodotabladatos.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
'<form name = "formulario" action="recibido.html" method="get" onreset="anular()">'+'<input class="btn btn-outline-primary" type = "submit" value="Aceptar"> <input class="btn btn-outline-secondary" type="reset" value="Cancelar">';
edicion = "true";
}
else {
     alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function anular() {
window.location.reload();
} 