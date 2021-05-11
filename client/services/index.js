/**
 * Format string to fixed to 2.
 *
 * @param {string} value
 * @returns {string}
 */
const stringToFixed = (rawValue) => {
  let newValue = rawValue;
  const indexOfFirstDot = rawValue.indexOf('.');

  if (indexOfFirstDot !== -1) {
    let integerString = rawValue.substring(0, indexOfFirstDot);
    let decimalString = rawValue.substring(indexOfFirstDot + 1);

    integerString = InputModel.formatIntegerString(integerString);
    decimalString = InputModel.removeNonDigitFromString(decimalString);
    decimalString = decimalString.substring(0, 2);

    if (integerString && !decimalString) {
      newValue = `${integerString}.`;
    } else if (!integerString && decimalString) {
      newValue = `0.${decimalString}`;
    } else {
      newValue = `${integerString}.${decimalString}`;
    }
  } else {
    newValue = InputModel.formatIntegerString(newValue);
  }

  return newValue;
};

/**
 * Format integer string - remove non digit chars and '0' if it is a preceding char.
 *
 * @param {string} rawValue
 * @returns {string}
 */
const formatIntegerString = (rawValue) => {
  let newValue = InputModel.removeNonDigitFromString(rawValue);

  if (newValue.length > 1 && newValue[0] === '0') {
    newValue = newValue.substring(1);
  }

  return newValue;
};

/**
 * Remove non digit chars from a string.
 *
 * @param {string} rawValue
 * @returns {string}
 */
const removeNonDigitFromString = (rawValue) => rawValue.replace(/\D/g, '');
