function HouseKeeper(name,age,rightToWork,willingToClean){
  this.name = name;
  this.age = age;
  this.rightToWork = rightToWork;
  this.willingToClean = willingToClean;
  this.clean = function(){console.log("cleaning in progress");}
}
var houseKeeper1 = new HouseKeeper("jan", 19, true , ["toilets","bedrooms","windows"]);
houseKeeper1.clean();
