const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  checkParameters(message, key) {
    return typeof message === 'undefined' || typeof key === 'undefined';
  }

  encrypt(message, key) {
    if (this.checkParameters(message, key)) {
      throw new Error;
    }
  }

  decrypt(encryptedMessage, key) {
    if (!this.checkParameters(encryptedMessage, key)) {
      throw new Error;
    }
  }
}

module.exports = VigenereCipheringMachine;
