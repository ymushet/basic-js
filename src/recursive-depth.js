class DepthCalculator {
  calculateDepth(arr, helper) {
    if (!helper) helper = 1;
    let result = helper;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let helper = this.calculateDepth(arr[i], helper + 1);
        if (helper > result) {
          result = helper;
        }
      }
    }
    return result;
  }
}
