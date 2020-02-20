module.exports = function transform(arr) {
  //throw 'Not implemented';
  if (!Array.isArray(arr)) {
    throw error;
  }
  if(arr.length==0){
    return arr;
  }

  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";

  let newTmp = [];

  arr.reduce((prev,e,i)=>{
    if(!prev){
      return true;
    }
    switch (e) {
      case doublePrev:
        newTmp.push(arr[i-1]);
        break;
      case doubleNext:
        newTmp.push(arr[i+1]);
        break;
      case discardNext:
        return false;
      case discardPrev:
        newTmp.pop();
        break;
      default:
        newTmp.push(arr[i]);
    }
    return true;
  },true)

  return newTmp.filter(e=>e!==undefined);
};
