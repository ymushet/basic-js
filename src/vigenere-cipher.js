//const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === undefined || direct === true) {
      this.direct = true;
    } else {
      this.direct = false;
    }
  }
  encrypt(message, key) {
    errorHandling(message, key);
    if (message === undefined || key === undefined) {
      throw new CustomError("Error");
    }
    let resultStr = "";
    const lettersAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const strHelper = checkForLetters(message).toLowerCase();
    key = helperForKey(message, key);
    for (let i = 0; i < strHelper.length; i++) {
      let index =
        (lettersAlphabet.indexOf(strHelper[i]) +
          lettersAlphabet.indexOf(key[i])) %
        26;
      resultStr += lettersAlphabet[index];
    }
    resultStr = this.restoreString(message, resultStr);
    return resultStr.toUpperCase();
  }
  decrypt(message, key) {
    errorHandling(message, key);
    if (message === undefined || key === undefined) {
      throw new CustomError("Error");
    }
    let resultStr = "";
    const lettersAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const strHelper = checkForLetters(message).toLowerCase();
    key = helperForKey(message, key);

    for (let i = 0; i < strHelper.length; i++) {
      let index =
        (lettersAlphabet.indexOf(strHelper[i]) +
          26 -
          lettersAlphabet.indexOf(key[i])) %
        26;
      resultStr += lettersAlphabet[index];
    }
    resultStr = this.restoreString(message, resultStr);
    return resultStr.toUpperCase();
  }
  restoreString(message, resultStr) {
    for (let i = 0; i < message.length; i++) {
      if (!message[i].match(/[a-z]/i)) {
        resultStr = helperForString(resultStr, i, message[i]);
      } else continue;
    }
    if (this.direct === false) resultStr = reverseForString(resultStr);
    return resultStr;
  }
}

module.exports = VigenereCipheringMachine;

function checkForLetters(message) {
  let resultStr = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i].toUpperCase() != message[i].toLowerCase())
      resultStr += message[i];
  }
  return resultStr;
}

function helperForKey(message, key) {
  key = key.toLowerCase();
  message = checkForLetters(message);
  let resultStr = "";
  for (let i = 0; i < message.length; i++) {
    resultStr += key[i % key.length];
  }
  return resultStr;
}

function reverseForString(str) {
  return str.split("").reverse().join("");
}

function helperForString(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

function errorHandling(message, key) {
  if (message === undefined || key === undefined) {
    throw new CustomError("Error");
  }
}

