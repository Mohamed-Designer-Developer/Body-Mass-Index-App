function Calculate() {
  // DOM select
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  let BMI = weight / (height * height);

  let category;

  
  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category = "Normal";
  } else if (BMI >= 24.9 && BMI < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.querySelector(
    ".result"
  ).innerHTML = `Your BMI is ${BMI} and You are ${category}`;
}

function ClearInput() {
  const weight = document.getElementById("weight").value = '';
  const height =document.getElementById("height").value = '';
  document.querySelector(".result").innerHTML = '';
}
