$(window).on("load",inicio);

function inicio()
{
    setupBlocks();
    $(window).on("resize",setupBlocks)
}

function setupBlocks() 
{
    colCount = 0;
    colWidth = 0;
    margin = 20;
    windowWidth = 0;
    blocks = [];
    windowWidth = $(window).width();
    colWidth = $('.block').outerWidth();
    colCount = Math.floor(windowWidth/(colWidth+margin));
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
            'left':leftPos+'px',
            'top':min+100+'px'
        });
        blocks[index] = min+$(this).outerHeight()+margin;
    });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};