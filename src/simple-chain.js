const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (this.chain.length) {
      this.chain += '~~';
    }

    if (typeof value === 'undefined') {
      this.chain += '( )';
    } else {
      this.chain += `( ${value} )`;
    }

    return this;
  },

  removeLink(position) {
    const arr = this.chain.split('~~');

    if (typeof position === 'number' && Number.isInteger(position) && arr[position - 1]) {
      const deletedElement = arr[position - 1];
      this.chain = arr.filter(item => item !== deletedElement).join('~~');

      return this;
    } else {
      this.chain = '';
      throw new Error('An error occurred');
    }
  },

  reverseChain() {
    const arr = this.chain.split('~~').reverse();
    this.chain = arr.join('~~');

    return this;
  },

  finishChain() {
    const currentChain = this.chain;
    this.chain = '';

    return currentChain;
  }
};

module.exports = chainMaker;
