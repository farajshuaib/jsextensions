"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.isEqual = function (arr) {
    if (this.length !== arr.length)
        return false;
    for (var i = 0; i < this.length; i++) {
        if (this[i] !== arr[i])
            return false;
    }
    return true;
};
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.isEmptyOrNull = function () {
    return this == null || this.length === 0;
};
