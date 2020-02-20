module.exports = function repeater(str, options) {
  this.repeatTimes=options.repeatTimes!==undefined?options.repeatTimes:1;
  this.separator=options.separator!==undefined?String(options.separator):'+';
  this.addition=options.addition!==undefined?String(options.addition):'';
  this.additionRepeatTimes= options.additionRepeatTimes!==undefined?options.additionRepeatTimes:1;
  this.additionSeparator=options.additionSeparator!==undefined?String(options.additionSeparator):'+';
 
  let repeat='';
 
  for (let i = 0; i < this.repeatTimes; i++) {
    repeat+=String(str);
    for (let j = 0; j < this.additionRepeatTimes; j++) {
      repeat+=this.addition;      
      j<(this.additionRepeatTimes-1)?repeat+=this.additionSeparator:0;
    }
    i<(this.repeatTimes-1)?repeat+=this.separator:0;
  }

  return repeat;
};
  