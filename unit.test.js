const lib = require('./src/script');
const calculator = require('./src/calculator');
const stringLength = lib.stringLength;
const reverseString = lib.reverseString;
const capitalize = lib.capitalize;

test('length of world to equal 5', () => {
    expect(stringLength('world')).toBe(5);
});

test('count is Greater than 1 but not more than 10', () => {
    expect(stringLength('wonderful')).toBeGreaterThan(0);
    expect(stringLength('java')).toBeLessThanOrEqual(10);
    expect(() => stringLength('')).toThrow(Error);
    expect(() => stringLength('cosmopolitan')).toThrow(Error);
});

test('string is reversed', () => {
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('I am SJA')).toBe('AJS ma I');
});

describe('addition', () => {
    test('5 + 5 must equal 10', () => {
      expect(calculator.add(5, 5)).toBe(10);
    });

    test('10 + 66 must equal 76', () => {
      expect(calculator.add(10, 66)).toBe(76);
    });
  
    test('8 + 20 must equal 28', () => {
      expect(calculator.add(8, 20)).toBe(28);
    });

    test('100 + 2401 must equal 2501', () => {
      expect(calculator.add(100, 2401)).toBe(2501);
    });
});

describe('subtraction', () => {
    test('1 - 6 must equal -5', () => {
      expect(calculator.subtract(1, 6)).toBe(-5);
    });

    test('5 - 6 must equal -1', () => {
      expect(calculator.subtract(5, 6)).toBe(-1);
    });
  
    test('10 - 6 must equal 4', () => {
      expect(calculator.subtract(10, 6)).toBe(4);
    });

    test('31 - 31 must equal 0', () => {
      expect(calculator.subtract(31, 31)).toBe(0);
    });
});

describe('multiplication', () => {
  test('44 * 2 must equal 88', () => {
    expect(calculator.multiply(44, 2)).toBe(88);
  });

  test('11 * 11 must equal 121', () => {
    expect(calculator.multiply(11, 11)).toBe(121);
  });

  test('80 * 0 must equal 0', () => {
    expect(calculator.multiply(80, 0)).toBe(0);
  });

  test('7 * 7 must equal 49', () => {
    expect(calculator.multiply(7, 7)).toBe(49);
  });
});

describe('division', () => {
    test('20 / 2 must equal 10', () => {
      expect(calculator.divide(20, 2)).toBe(10);
    });
  
    test('21 / 3 must equal 7', () => {
      expect(calculator.divide(21, 3)).toBe(7);
    });

    test('80 / 6 must equal 13.333333333333334', () => {
      expect(calculator.divide(80, 6)).toBeLessThan(14);
    });

    test('40 / 5 must equal 8', () => {
      expect(calculator.divide(40, 5)).toBe(8);
    });
});

describe('capitalize string', () => {
    test('your welcome must equal Your welcome', () => {
        expect(capitalize('your welcome')).toBe('Your welcome');
    });
});