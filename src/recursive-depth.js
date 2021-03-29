module.exports = class DepthCalculator {
  calculateDepth(arr, c) {
    if (!c) c = 1;
    let r = c;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let j = this.calculateDepth(arr[i], c + 1);
        if (j > r) r = j;
      }
    }
    return r;
  }
};
