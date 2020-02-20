module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((tr, e) => (Array.isArray(e) ? true : tr || false), false)
      ? 1 + this.calculateDepth(
              arr.reduce((newArr, val) => Array.isArray(val) ? newArr.concat(val) : newArr, [])
          )
      : 1;
  }
};
