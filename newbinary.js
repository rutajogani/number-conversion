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

const decimalInput = document.getElementById("decimal-input");
const binaryInput = document.getElementById("binary-input");

const moveToDecimal = document.getElementById("move-to-decimal");
const moveToBinary = document.getElementById("move-to-binary");

const convertBinary = document.getElementById("convert-binary");
convertBinary.addEventListener("click", () => {
  const binaryResult = document.getElementById("binary-result");
  binaryResult.innerHTML = convertDecimalToBinary(decimalInput.value);
});

moveToBinary.addEventListener("click", () => {
  const binaryResult = document.getElementById("binary-result");
  const binaryInput = document.getElementById("binary-input");
  binaryInput.value = binaryResult.innerHTML;
});

const convertDecimal = document.getElementById("convert-decimal");
convertDecimal.addEventListener("click", () => {
  const decimalResult = document.getElementById("decimal-result");
  decimalResult.innerHTML = convertBinaryToDecimal(binaryInput.value);
});

moveToDecimal.addEventListener("click", () => {
  const decimalResult = document.getElementById("decimal-result");
  const decimalInput = document.getElementById("decimal-input");
  decimalInput.value = decimalResult.innerHTML;
});
