declare global {
  interface Boolean {
    isTrue(): boolean;
    isFalse(): boolean;
    toggle(): boolean;
  }
}
Boolean.prototype.isTrue = function () {
  return this.valueOf() === true;
};

Boolean.prototype.isFalse = function () {
  return this.valueOf() === false;
};

Boolean.prototype.toggle = function () {
  return !this.valueOf();
};

export {};
