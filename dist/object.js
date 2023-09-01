"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
};
Object.prototype.isEmptyOrNull = function () {
    return this == null || Object.keys(this).length === 0;
};
Object.prototype.groupBy = function (array, key) {
    return array.reduce(function (hash, obj) {
        var _a;
        if (obj[key] === undefined)
            return hash;
        return Object.assign(hash, (_a = {},
            _a[obj[key]] = (hash[obj[key]] || []).concat(obj),
            _a));
    }, {});
};
Object.prototype.isValidObject = function () {
    return this != null && typeof this === "object" && !Array.isArray(this);
};
