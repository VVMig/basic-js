const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    //throw 'Not implemented';
    this.str.push(`( ${value} )`);
    return chainMaker;
    
  },
  removeLink(position) {
    //throw 'Not implemented';
    if(position<1 || position>this.getLength() || Math.ceil(position)!=position || typeof(position)!='number'){
      this.str=[];
      throw error;
    }
    this.str.splice(position-1,1);
        
    return chainMaker;
  },
  reverseChain() {
    //throw 'Not implemented';
    this.str=this.str.reverse();
    return chainMaker;
  },
  finishChain() {
    //throw 'Not implemented';
    let chain=this.str.join('~~');
    this.str=[];
    return chain;
    
  }
};

module.exports = chainMaker;
