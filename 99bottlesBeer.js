function nintyNineBottles() {
  var numberOfBottles = 99;
  while (numberOfBottles > 0) {
    if (numberOfBottles == 1) {
      console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer.");
      numberOfBottles--;
      console.log("Take it down pass it around, no more bottles of beer");
    } else {
      console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.");
      numberOfBottles--;
      console.log("Take one down pass it around " + numberOfBottles + " bottles of beer");
    }
  }
}
nintyNineBottles()
