"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Date.prototype.isLeapYear = function () {
    var year = this.getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
