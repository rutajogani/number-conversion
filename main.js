import {convertDecimalToBinary} from "./convertDecimalToBinary.js";
import { convertBinaryToDecimal } from "./convertBinaryToDecimal.js";

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
