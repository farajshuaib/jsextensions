"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("../src/bools");
(0, globals_1.describe)("Booleans Extensions test cases", () => {
    (0, globals_1.it)("should return true when given a true boolean", () => {
        const bool = true;
        (0, globals_1.expect)(bool.isTrue()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a false boolean", () => {
        const bool = false;
        (0, globals_1.expect)(bool.isTrue()).toBe(false);
    });
    (0, globals_1.it)("should return true when given a false boolean", () => {
        const bool = false;
        (0, globals_1.expect)(bool.isFalse()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a true boolean", () => {
        const bool = true;
        (0, globals_1.expect)(bool.isFalse()).toBe(false);
    });
    (0, globals_1.it)("should return true when given a true boolean", () => {
        const bool = true;
        (0, globals_1.expect)(bool.toggle()).toBe(false);
    });
});
