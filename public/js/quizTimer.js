var m=9;
var s=60;
var y= setInterval(function(){

if(s==0&&m==0){
document.getElementById("sbtn").click();
}

if(s==00){
m--;
s=60;
}
s--;
document.getElementById("timer").innerHTML= m+"m : "+s+"s";

},1000)
