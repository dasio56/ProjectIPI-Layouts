//para el alto de la pantalla =screen.height;
//ancho de la pantalla =screen.width; 
//esto hace referecian a la resolucion

window.onload = tamano();

function tamano(){
//document.getElementById('eldiv').style.width="300px";

}


var allHTMLTags = new Array();
//funcion para obtener elemento por medio de la clase    
function getElementByClass(block) {
    // Creamos un array con todas las etiquetas del HTML
    var allHTMLTags=document.getElementsByTagName("*");
    // Las recorremos
    for (i=0; i<allHTMLTags.length; i++) {
        // Y comprobamos que la clase sea la adecuada
        if (allHTMLTags[i].className==block) {
            // Aqui ejecutamos lo que queramos a los elementos
            // que coincidan con la clase.
            allHTMLTags[i].style.width='400px';
        }
    }
}