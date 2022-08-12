function whosPaying(names) {

/******Don't change the code above*******/
var nameArray = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var whoPaysID = Math.round( (Math.random()*nameArray.length));
var names = nameArray[whoPaysID]+" is going to buy lunch today!";
return names;



/******Don't change the code below*******/
}
whosPaying();
