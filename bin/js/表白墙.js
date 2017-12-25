$(function(){
    /**
     * 瀑布流
     */
    function cardLoaction(){
        var cardWidth=$(".card").css("width");
        cardWidth=cardWidth.replace(/px/,"");
        var num=Math.floor($("#love-content").width()/cardWidth);
        var cardArr=[];
        var $card=$(".card");
        $card.each(function(index,element){
            if(index<num){
                cardArr[index]=$card.eq(index).height();
                $(element).css({
                    "left":(index*$card.outerWidth()+20*(index)),
                    "top":0 
                });
            }
            else{
                var minCardHeight=Math.min.apply(null,cardArr);
                var minIndex=cardArr.indexOf(minCardHeight);
                $(element).css({
                    "position":"absolute",
                    "top":minCardHeight+40,
                    "left":$card.eq(minIndex).position().left
                });
                cardArr[minIndex]+=$(element).height()+60;
            }
        });
    }
    cardLoaction();
    $(window).resize(function(){
        cardLoaction();
        adjust();
    });
    /**
     * 更多操作大小控制
     */
    /**
     * 此处存在严重bug！！！！
     * 但不清楚什么时候会爆发
     */
    function adjust(){
        var $contron=$(".card-more-drop");
        
        var $main=$(".card-more");
        $contron.css("width",$main.width());
        
        $contron.css("top",$main.height());
        $main.mouseenter(function(){
            $(this).find(".card-more-drop").show();
        })
        $contron.mouseover(function(){
            $(this).show();
        })
        $main.mouseleave(function(){ 
          
            $contron.hide();
        });
    }
    adjust();
})
/**瀑布流 */