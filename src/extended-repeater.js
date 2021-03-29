module.exports = function repeater(str, options) {
  let result = "";
  if (!options.repeatTimes && options.addition) {
    result += str;
    result += options.addition;
    return result;
  }
  if (options.repeatTimes === 1 && !options.addition) return str;
  if (
    options.addition &&
    options.additionRepeatTimes &&
    !options.additionSeparator
  )
    options.additionSeparator = "|";
  if (options.repeatTimes && !options.separator) options.separator = "+";
  if (
    options.addition &&
    options.additionRepeatTimes &&
    !options.additionSeparator
  )
    options.additionSeparator = "|";
  if (options.repeatTimes && !options.separator) options.separator = "+";
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let y = 0; y < options.additionRepeatTimes; y++) {
      if (options.addition) result += options.addition;
      if (options.additionSeparator && y < options.additionRepeatTimes - 1)
        result += options.additionSeparator;
    }
    if (options.addition && !options.additionRepeatTimes) {
      result += options.addition;
    }
    if (options.separator && i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
};