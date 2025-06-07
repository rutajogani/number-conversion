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
