const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === "undefined") {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + String(value) + " )");
    }
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position <= this.chain.length - 1 &&
      position > 0
    ) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new CustomError("Error");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    if (this.getLength(this.chain) > 1) {
      result = this.chain.join("~~");

    } else {
      result = this.chain.join("");
    }
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
