import stringCalculator from '../src/string-calculator.js';

describe('stringCalculator', () => {
  describe('when an empty string is passed in', () => {
    it('returns 0', () => {
      const result = stringCalculator.add('');
      assert(result === 0);
    });
  });

  describe('when a number is passed in', () => {
    it('returns the number', () => {
      const result = stringCalculator.add('2');
      assert(result === 2);
    });
  });

  describe('when string is passed in', () => {
    it('returns NaN', () => {
      const result = stringCalculator.add('a');
      assert(isNaN(result));
    });
  });

  describe('when "1,2" is passed in', () => {
    it('returns 3', () => {
      const result = stringCalculator.add('1,2');
      assert(result === 3);
    });
  });
});
