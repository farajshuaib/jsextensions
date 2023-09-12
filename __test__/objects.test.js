"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("../src/objects");
(0, globals_1.describe)("Objects Extensions test cases", () => {
    (0, globals_1.it)("should return true when given an empty object", () => {
        const obj = {};
        (0, globals_1.expect)(obj.isEmpty()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a non-empty object", () => {
        const obj = { a: 1 };
        (0, globals_1.expect)(obj.isEmpty()).toBe(false);
    });
    // Tests that the function returns true for an empty object
    (0, globals_1.it)("should return true when object is empty", () => {
        const obj = {};
        (0, globals_1.expect)(obj.isEmpty()).toBe(true);
    });
    // Tests that the function correctly identifies an empty object
    (0, globals_1.it)("should return true when the object is empty", () => {
        const obj = {};
        (0, globals_1.expect)(obj.isEmptyOrNull()).toBe(true);
    });
    // Tests that an object with properties returns true
    (0, globals_1.it)("should return true when object has properties", () => {
        const obj = { name: "John", age: 30 };
        (0, globals_1.expect)(obj.isValidObject()).toBe(true);
    });
});
