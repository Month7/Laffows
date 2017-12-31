$(function(){
    /**
     * 头部二级导航条
     */
    $.fn.navC=function(){
        var $study=$("#nav-study");
        var $drop=$(".nav-study-children");
        var $friends=$("#nav-friends");
        var $dropFriends=$("#nav-friends-children");
        var left=$study.offset().left;
        var leftF=$friends.offset().left;
        $drop.css({
            "left":left
        });
        $dropFriends.css({
            "left":leftF
        });
        $study.mouseover(function(){
            $drop.show();
        });
        $study.mouseout(function(){
            $drop.hide();
        });
        $drop.mouseover(function(){
            $drop.show();
            $study.addClass("selected");
        });
        $drop.mouseout(function(){
            $drop.hide();
            $study.removeClass("selected");
        });
        $friends.mouseover(function(){
            $dropFriends.show();
        });
        $friends.mouseout(function(){
            $dropFriends.hide();
        });
        $dropFriends.mouseover(function(){
            $dropFriends.show();
            $friends.addClass("selected");
        });
        $dropFriends.mouseout(function(){
            $dropFriends.hide();
            $friends.removeClass("selected");
        });
    }
    $(window).navC();
    //
    var test=$(".emptyRooms tbody");
    $("#emptyRoomSearch").click(function(){
        for(var i=0;i<30;i++){
            test.append("<tr><td>2-1-101</td><td>2-1-101</td><td>理论教学室</td><td>2</td><td>77</td></tr>   ")
        }
    });
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
    if($(".card").length>0){
        cardLoaction();
        adjust();
        $(window).resize(function(){
            cardLoaction();
            adjust();
        });
    }
   
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
    function interested(){
        $(".like").click(function(){
            var num=$(this).parents(".studyMessage").find(".likedPeople").text();
            num++;
            $(this).parents(".studyMessage").find(".likedPeople").text(num);
        });
    }
    if($(".like").length>0){
        interested();
    }
}(jQuery));