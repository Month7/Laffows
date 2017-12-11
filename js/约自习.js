$(function(){
    $(".pullDown").click(function(){
        $(this).parents("li").find(".list-drop").toggle();
    })
})