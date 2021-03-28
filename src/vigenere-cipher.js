const CustomError = require("../extensions/custom-error");

const OFFSET = 65;
const A_CODE = 65;
const Z_CODE = 90;

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

    let result = '';
    let reversedResult = '';
    let noCharOffset = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      const code = message.charCodeAt(i);
      const keyPos = (i - noCharOffset) % key.length;
      if (code >= A_CODE && code <= Z_CODE) {
        const encryptedChar = String.fromCharCode((code + key.charCodeAt(keyPos) - OFFSET * 2) % 26 + OFFSET);
        result += encryptedChar;
      } else {
        result += message[i];
        noCharOffset++;
      }
    }

    if (!this.direction) {
      for (const char of result) {
        reversedResult = char + reversedResult;
      }
    }

    return this.direction ? result : reversedResult;
  }

  decrypt(encryptedMessage, key) {
    if (this.checkParameters(encryptedMessage, key)) {
      throw new Error;
    }

    let result = '';
    let reversedResult = '';
    let noCharOffset = 0;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      const code = encryptedMessage.charCodeAt(i);
      const keyPos = (i - noCharOffset) % key.length;
      if (code >= A_CODE && code <= Z_CODE) {
        const adaptedCode  = code - OFFSET;
        const adaptedKeyChar = key.charCodeAt(keyPos) - OFFSET;
        const substraction = adaptedCode - adaptedKeyChar > 0
          ? (adaptedCode - adaptedKeyChar) % 26
          : (adaptedCode - adaptedKeyChar + 26) % 26

        const decryptedChar = String.fromCharCode(substraction + OFFSET);
        result += decryptedChar;
      } else {
        result += encryptedMessage[i];
        noCharOffset++;
      }
    }

    if (!this.direction) {
      for (const char of result) {
        reversedResult = char + reversedResult;
      }
    }

    return this.direction ? result : reversedResult;
  }
}

module.exports = VigenereCipheringMachine;
