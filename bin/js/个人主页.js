
document.getElementById("dongtai").onclick=function(){
    document.getElementsByClassName("activity")[0].style.display="block";
    document.getElementsByClassName("invitation")[0].style.display="none";
};
document.getElementById("tiezi").onclick=function(){
    document.getElementsByClassName("activity")[0].style.display="none";
    document.getElementsByClassName("invitation")[0].style.display="block";
};

// var person1={
//     toLocaleString:function(){
//         return "fun1";
//     },
//     toString:function(){
//         return "fun2";
//     }
// }
// var person2={
//     toLocaleString:function(){
//         return "fun3";
//     },
//     toString:function(){
//         return "fun4";
//     }
// }
// var people=[person1,person2];
// console.log(people);
// console.log(people.toLocaleString());
// $(function(){
//     $.fn.test=function(a){
//         a=a||"init";
//         console.log(a);
//     }
//     $("#dongtai").test();
// })

// function count(str) {
//     var res={};
//     var bat=str.match(/\S/g);               //非空字符串
//     console.log(bat);
//     for(var i in bat){
// 		if(res[bat[i]]){
//             res[bat[i]]++;
//         }else{
//             res[bat[i]]=1;
//         }
//     }
//     return res;
// }
// function count(str) {
//     var count = {};
//     var str1 = str.match(/\S/g)
//     for(var i in str1) {
//         if(count[str1[i]]){
//             count[str1[i]]++;
//         }
//         else{
//             count[str1[i]] = 1;
//         }
//     }
//     return count;
// }
function cssStyle2DomStyle(sName) {
    var arr=sName.split("");
    if(arr[0]=="-"){
        arr.splice(0,1);
    }
    for(var i=1;i<arr.length;i++){
        if(arr[i]=="-"){
            arr[i+1]=arr[i+1].toUpperCase();
            arr.splice(i,1);
        }
    }
    arr=arr.join("");
    return arr;
}
console.log(cssStyle2DomStyle("-webkit-border-image"));
// var a="a";

// var b=a.toUpperCase();
// console.log(b)

