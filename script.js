const dateofbirth = document.querySelector("#date-of-birth");
const enteredNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const output = document.querySelector("#output-box");

function comparedValues(sum, luckyNumber) {
  console.log(luckyNumber);
  if (sum % luckyNumber === 0) {
    output.innerText = "your birthday is lucky 🚀";
  } else {
    output.innerText = "your bithday is not lucky 😞";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateofbirth.value;
  const sum = calculateSum(dob);
  const luckyNumber = enteredNumber.value;
  console.log("her is the sum", sum);
  if (sum && dob) {
    comparedValues(sum, luckyNumber);
  } else {
    output.innerText = "please enter both the field 🤬";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
