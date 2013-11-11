//para el alto de la pantalla =screen.height;
//ancho de la pantalla =screen.width; 
//esto hace referecian a la resolucion

//window.onload = tamano();

var allHTMLTags = new Array();
//funcion para obtener elemento por medio de la clase    
function getElementByClass(block) {
    // Creamos un array con todas las etiquetas del HTML
    var ancho = calculaAncho();
    var otro = (ancho/4)-(ancho/12);
    var allHTMLTags=document.getElementsByTagName("*");
    // Las recorremos
    for (i=0; i<allHTMLTags.length; i++) {
        // Y comprobamos que la clase sea la adecuada
       
        if (allHTMLTags[i].className=="block") {
            // Aqui ejecutamos lo que queramos a los elementos
            // que coincidan con la clase.
            allHTMLTags[i].style.width=otro+"px";
            allHTMLTags[i].style.marginRight="2px";
        }
    }
}

  function calculaAncho(){
  if (document.layers){
    ancho = window.innerWidth;
  } else {
    ancho = document.body.clientWidth;
  }
  return ancho;
}