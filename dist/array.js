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
Array.prototype.groupBy = function (key) {
    return this.reduce(function (hash, obj) {
        var _a;
        if (obj[key] === undefined)
            return hash;
        return Object.assign(hash, (_a = {},
            _a[obj[key]] = (hash[obj[key]] || []).concat(obj),
            _a));
    }, {});
};
Array.prototype.removeDuplicates = function () {
    // remove duplicates from an array of objects
    return this.filter(function (item, index, self) {
        return index ===
            self.findIndex(function (t) { return t.id === item.id && t.name === item.name; });
    });
};
Array.prototype.sortBy = function (key) {
    return this.sort(function (a, b) {
        if (a[key] < b[key])
            return -1;
        if (a[key] > b[key])
            return 1;
        return 0;
    });
};
