module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor((3600 / turnsSpeed) * steps),
  };
};
