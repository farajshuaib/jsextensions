"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Boolean.prototype.isTrue = function () {
    return this.valueOf() === true;
};
Boolean.prototype.isFalse = function () {
    return this.valueOf() === false;
};
Boolean.prototype.toggle = function () {
    return !this.valueOf();
};
