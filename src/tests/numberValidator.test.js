const { NumberValidator } = require('../../app/number_validator');
const validator = new NumberValidator();

describe('NumberValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumberValidator();
  });

  test('should return true when provided an even number', () => {
    const validatorResults = validator.isNumberEven(4);
    expect(validatorResults).toBe(true);
  });

  test('should return false when provided an odd number', () => {
    const validatorResults = validator.isNumberEven(5);
    expect(validatorResults).toBe(false);
  });

  test('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).toThrow(`[4] is not of type "Number" it is of type "string"`);
  });

  test('should throw an error when provided a boolean', () => {
    expect(() => {
      validator.isNumberEven(true);
    }).toThrow(`[true] is not of type "Number" it is of type "boolean"`);
  });
});
