function HouseKeeper(name,age,rightToWork,willingToClean){
  this.name = name;
  this.age = age;
  this.rightToWork = rightToWork;
  this.willingToClean = willingToClean;
}
var houseKeeper1 = new HouseKeeper("jan", 19, true , ["toilets","bedrooms","windows"]);
console.log(houseKeeper1.name);
