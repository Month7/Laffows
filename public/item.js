function LeftRotateString(str, n)
{
    // write code here
    var arr=str.split("");
    var t=arr.splice(0,n);
    var t2=t.join("");
    arr.push(t2);
    var res=arr.join("");
    res=new String(res);
  
    return res;
}
console.log(LeftRotateString("abcXYZdef",3));