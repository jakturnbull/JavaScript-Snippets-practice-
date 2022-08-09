var guestCheck = prompt("what is your name")
var guestList = ["Angela","Jak","James","Jordan","Matt"];
var letIn = guestList.includes(guestCheck);
if (letIn == true){
  alert("welcome");
}
else{
  alert("go away");
}
