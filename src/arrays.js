"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.isEqual = function (arr) {
    if (this.length !== arr.length)
        return false;
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== arr[i])
            return false;
    }
    return true;
};
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.isNotEmpty = function () {
    return this.length > 0;
};
Array.prototype.isEmptyOrNull = function () {
    return this == null || this.length === 0;
};
Array.prototype.groupBy = function (key) {
    return this.reduce((hash, obj) => {
        if (obj[key] === undefined)
            return hash;
        return Object.assign(hash, {
            [obj[key]]: (hash[obj[key]] || []).concat(obj),
        });
    }, {});
};
Array.prototype.removeDuplicates = function () {
    // remove duplicates from an array of objects
    return this.filter((item, index, self) => index ===
        self.findIndex((t) => t.id === item.id && t.name === item.name));
};
Array.prototype.sortBy = function (key) {
    return this.sort((a, b) => {
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    });
};
Array.prototype.firstOrDefault = function () {
    if (this.isEmptyOrNull())
        return null;
    return this[0];
};
Array.prototype.lastOrDefault = function () {
    if (this.isEmptyOrNull())
        return null;
    return this[this.length - 1];
};
Array.prototype.firstOrElse = function (Else) {
    if (this.isEmptyOrNull())
        return Else;
    return this[0];
};
Array.prototype.skip = function (count) {
    return this.slice(count, this.length);
};
Array.prototype.take = function (count) {
    return this.slice(0, count);
};
