"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("../src/functions");
(0, globals_1.describe)("Functions Extensions test cases", () => {
    (0, globals_1.it)("should return true when given a function", () => {
        const func = function () { };
        (0, globals_1.expect)(func.isFunction()).toBe(true);
    });
});
