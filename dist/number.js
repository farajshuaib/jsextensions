"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Number.prototype.isPositive = function () {
    return this.valueOf() > 0;
};
Number.prototype.isNegative = function () {
    return this.valueOf() < 0;
};
Number.prototype.isEven = function () {
    return this.valueOf() % 2 === 0;
};
Number.prototype.isOdd = function () {
    return this.valueOf() % 2 !== 0;
};
Number.prototype.isZero = function () {
    return this.valueOf() === 0;
};
Number.prototype.isBetween = function (min, max) {
    return this.valueOf() >= min && this.valueOf() <= max;
};
Number.prototype.isDecimal = function () {
    return this.valueOf() % 1 !== 0;
};
Number.prototype.add = function (num) {
    return this.valueOf() + num;
};
Number.prototype.multiplay = function (num) {
    return this.valueOf() * num;
};
Number.prototype.divide = function (num) {
    return this.valueOf() / num;
};
Number.prototype.subtract = function (num) {
    return this.valueOf() - num;
};
