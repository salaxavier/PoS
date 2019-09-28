const EDDSA = require("elliptic").eddsa;
const eddsa = new EDDSA("ed25519");
const uuidV1 = require('uuid/v1');  // version 1 use timestamp to generate unique ids, although in production one shouldn't use this
const SHA256 = require('crypto-js/sha256');


class ChainUtil {
  static genKeyPair(secret) {
    return eddsa.keyFromSecret(secret);
  }


  static id(){
        return uuidV1();
  }

  static hash(data){
   return SHA256(JSON.stringify(data)).toString();
 }

 static verifySignature(publicKey,signature,dataHash){
   return ec.keyFromPublic(publicKey).verify(dataHash,signature);
 }

}

/*
class Transaction {
  constructor() {
    this.id = ChainUtil.id();
    this.type = null;
    this.input = null;
    this.output = null;
  }
}
*/


module.exports = ChainUtil;
//module.exports = Transaction;
