$(window).on("load",inicio);

function inicio()
{
    obtener();
    ponerBlocks();
    $(window).on("resize",ponerBlocks);
    $("#insertar").on("click",insertar);
}

function insertar()
{
    var elemento = $("#elementos").val();
    var contenido = $("#contenido").val();
    $.get("insertar.php",{elementos:elemento,contenido:contenido},obtener);
}

function obtener(datos)
{
    $.get("obtenerElementos.php",agregar);
}

function agregar(datos)
{
    $("#contenedor").html(datos);
    ponerBlocks();
}

function ponerBlocks() 
{
    colCount = 0;
    colWidth = 0;
    margin = 20;
    windowWidth = 0;
    spaceLeft = 0;
    blocks = [];
    windowWidth = $(window).width();
    colWidth = $('.block').outerWidth();
    colCount = Math.floor(windowWidth/(colWidth+margin));
    spaceLeft = (windowWidth - ((colWidth*(colCount))+(margin*(colCount-1)))) / 2;
    for(var i=0;i<colCount;i++) 
    {
        blocks.push(margin);
    }
    positionBlocks();
}

function positionBlocks() 
{
    $('.block').each(function(){
        var min = Array.min(blocks);
        var index = $.inArray(min, blocks);
        var leftPos = margin+(index*(colWidth+margin));
        $(this).css({
            'left':(spaceLeft+leftPos)+'px',
            'top':(min+200)+'px'
        });
        blocks[index] = min+$(this).outerHeight()+margin;
    });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};