var yourName = prompt("Enter your name : ");
var partnerName = prompt("Enter your partners name : ");
var n = Math.random();
n = Math.floor(n*100) +1;

if(n > 70){
  alert("your compatability is "+n+"% you are a perfect match");
}
else{
alert("your compatability is "+n+"%");
}
