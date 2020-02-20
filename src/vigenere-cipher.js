class VigenereCipheringMachine {
    constructor(reverse=true) {
      this.reverse=reverse;
    }
    encrypt(message,key) {
        //throw 'Not implemented';
        if(typeof(message)!=="string" || typeof(key)!=="string"){
          throw error;
        }
        message=message.split('').map(e=>e.toUpperCase(e));
        key=key.split('').map(e=>e.toUpperCase(e));
        let cipher='';

        for(let i=0,j=0;i<message.length;i++){
          if(message[i]<='Z' && message[i]>='A') {
            let diff=Math.abs(key[j].charCodeAt()-'A'.charCodeAt());
            let code=String.fromCharCode(message[i].charCodeAt()+diff)
            cipher+=code>'Z'?String.fromCharCode('A'.charCodeAt()+(code.charCodeAt()-'Z'.charCodeAt()-1)):code;
            j++;
            if(key[j]===undefined){
              j=0;
            }
            continue;
          }
          cipher+=message[i];  
        }

        if(this.reverse){
          return cipher;
        }
        else return cipher.split('').reverse().join('');
    }

    decrypt(encryptedMessage,key) {
        //throw 'Not implemented';
        if(typeof(encryptedMessage)!=="string" || typeof(key)!=="string"){
          throw error;
        }
        encryptedMessage=encryptedMessage.split('').map(e=>e.toUpperCase(e));
        key=key.split('').map(e=>e.toUpperCase(e));
        let cipher='';

        for(let i=0,j=0;i<encryptedMessage.length;i++){
          if(encryptedMessage[i]<='Z' && encryptedMessage[i]>='A') {
            let diff=Math.abs(key[j].charCodeAt()-'A'.charCodeAt());
            let code=String.fromCharCode(encryptedMessage[i].charCodeAt()-diff)
            cipher+=code<'A'?String.fromCharCode('Z'.charCodeAt()-('A'.charCodeAt()-code.charCodeAt()-1)):code;
            j++;
            if(key[j]===undefined){
              j=0;
            }
            continue;
          }
          cipher+=encryptedMessage[i];  
        }

        if(this.reverse){
          return cipher;
        }
        else return cipher.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
