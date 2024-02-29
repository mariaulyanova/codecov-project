class NumberValidator {
  isNumberEven(number) {
      if (!Number.isInteger(number)) {
          throw new Error(`[${number}] is not of type "Number" it is of type "${typeof number}"`);
      } else {
          return number % 2 === 0;
      }
  }

  getEvenNumbersFromArray(arrayOfNumbers) {
      if (Array.isArray(arrayOfNumbers) &&
          arrayOfNumbers.every((item) => Number.isInteger(item))) {
          const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
          return arrayOfEvenNumbers;
      } else {
          throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
      }
  }
}

module.exports = { NumberValidator };
