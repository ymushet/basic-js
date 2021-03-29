// const CustomError = require("../extensions/custom-error");

const WINTER = [11, 0, 1];
const SPRING = [2, 3, 4];
const SUMMER = [5, 6, 7];
const AUTUMN = [8, 9, 10];

module.exports = function getSeason(date) {
  if (!date || typeof date === "null")
    return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]")
    throw new CustomError("Error");
  if (Date.parse(date) === NaN) throw new CustomError("Error");
  if (!(date instanceof Date) || Date.parse(date) === NaN)
    throw new CustomError("Error");
  if (date === undefined) return "Unable to determine the time of year!";
  let month = date.getMonth();
  if (WINTER.includes(month)) return "winter";
  if (SPRING.includes(month)) return "spring";
  if (SUMMER.includes(month)) return "summer";
  if (AUTUMN.includes(month)) return "autumn";
};
