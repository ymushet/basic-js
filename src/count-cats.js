module.exports = function countCats(backyard) {
  return backyard.flat().filter((e) => e === "^^").length;
};
