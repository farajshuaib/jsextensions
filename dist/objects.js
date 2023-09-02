"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
};
Object.prototype.isEmptyOrNull = function () {
    return this == null || Object.keys(this).length === 0;
};
Object.prototype.isValidObject = function () {
    return this != null && typeof this === "object" && !Array.isArray(this);
};
