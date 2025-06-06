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
console.log(convertBinaryToDecimal(110010));
