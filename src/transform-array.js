module.exports = function transform(arr) {
  errorHandling(arr);
  let arrayResult = arr.concat();
  for (let i = 0; i < arrayResult.length; i++) {
      discardNext(arrayResult, i);
      discardPrev(arrayResult, i);
      doubleNext(arrayResult, i);
      doublePrev(arrayResult, i);
  }
  arrayResult = arrayResult.filter(item => item !== '--discard-next' && item !== '--double-prev' && item !== '--double-next' && item !== '--discard-prev');
  return arrayResult;
};

function errorHandling(arr) {
  if (!arr || Array.isArray(arr) !== true)
      throw new CustomError('Error');
}

function discardNext(arrayResult, i) {
  if (arrayResult[i] === '--discard-next') {
      if (typeof arrayResult[i + 1] !== 'undefined')
          arrayResult.splice(i + 1, 1);
  }
}

function discardPrev(arrayResult, i) {
  if (arrayResult[i] === '--discard-prev') {
      if (typeof arrayResult[i - 1] !== 'undefined')
          arrayResult.splice(i - 1, 1);
  }
}

function doubleNext(arrayResult, i) {
  if (arrayResult[i] === '--double-next') {
      if (typeof arrayResult[i + 1] !== 'undefined')
          arrayResult.splice(i, 1, arrayResult[i + 1]);
  }
}
function doublePrev(arrayResult, i) {
  if (arrayResult[i] === '--double-prev') {
      if (typeof arrayResult[i - 1] !== 'undefined')
          arrayResult.splice(i, 1, arrayResult[i - 1]);
  }
}