function convertDecimalToBinary(number) {
  if (number === 0) {
    return 0;
  }

  let numberOfBits = 0;
  for (let i = 0; i < number; i++) {
    const value = 2 ** i;
    if (number < value) {
      numberOfBits = i - 1;
      break;
    }
  }

  let total = 0;
  let binary = "";

  for (let i = numberOfBits; i >= 0; i--) {
    const preValue = 2 ** i;
    total += preValue;
    if (total <= number) {
      binary += "1";
    } else {
      binary += "0";
      total -= preValue;
    }
  }
  return binary;
}

function convertBinaryToDecimal(number) {
  const binary = number.toString();
  let total = 0;
  let index = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    const bit = binary[i];

    if (bit === "1") {
      const decimal = 2 ** index;
      total += decimal;
    }
    index++;
  }
  return total;
}

const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const display_1 = document.getElementById("display");
  display_1.innerHTML = convertDecimalToBinary(input.value);
});

const add = document.getElementById("add");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const display = document.getElementById("div");
  display.innerHTML = convertBinaryToDecimal(add.value);
});

const convert_d =document.getElementById("convert_d");
const convert_b =document.getElementById("convert_b");

convert_d.addEventListener("click", () => {
  
})