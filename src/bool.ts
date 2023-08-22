Boolean.prototype.isTrue = function () {
  return this.valueOf() === true;
};

Boolean.prototype.isFalse = function () {
  return this.valueOf() === false;
};

Boolean.prototype.toggle = function () {
  return !this.valueOf();
};
