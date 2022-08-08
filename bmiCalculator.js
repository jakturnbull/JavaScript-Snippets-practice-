function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / (Math.pow(height, 2)));

  if (bmi < 18.5) {
    var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    var interpretation = "Your BMI is " + bmi + ", so you have normal weight.";
  } else if (bmi > 24.9) {
    var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}
var interpretation = bmiCalculator(80, 2);
console.log(interpretation);
