module.exports = function countCats(arr) {
  //throw 'Not implemented';
  return arr.reduce((sum, e) => {
    return (
      sum + e.reduce((sum, e) => {
        return e == "^^" ? sum + 1 : sum;
      }, 0)
    );
  }, 0);
};
