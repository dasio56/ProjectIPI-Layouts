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
    j=0;
    i=0;
    alto=[];
    $('.block').each(function(){
        h=i/(colCount-1);
        if(h<=1)
        {
            var min = Array.min(blocks);
            var index = $.inArray(min, blocks);
            var leftPos = margin+(index*(colWidth+margin));
            $(this).css({
            'left':leftPos+'px'
            });
            blocks[index] = min+$(".block").outerHeight()+margin;
            alto.push()    
        }
        else
        {
            var min = Array.min(blocks);
            var index = $.inArray(min, blocks);
            var leftPos = margin+(index*(colWidth+margin));
            $(this).css({
            'left':leftPos+'px',
            'top':alto[j]+20+'px'
            });
            blocks[index] = min+$(".block").outerHeight()+margin;
            if(j<(colCount-1))
            {
                j++;
            }
            else
            {
                j = 0;
            }
            alto[j]=alto[j]+$(".block").outerHeight()+margin
        }
        i++;
    });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};