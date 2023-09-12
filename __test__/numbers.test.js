"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("../src/numbers");
(0, globals_1.describe)("Numbers Extensions test cases", () => {
    // isPositive
    (0, globals_1.it)("should return true when given a positive number", () => {
        const num = 1;
        (0, globals_1.expect)(num.isPositive()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a negative number", () => {
        const num = -1;
        (0, globals_1.expect)(num.isPositive()).toBe(false);
    });
    (0, globals_1.it)("should return false when given zero", () => {
        const num = 0;
        (0, globals_1.expect)(num.isPositive()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a decimal number", () => {
        const num = 1.5;
        (0, globals_1.expect)(num.isPositive()).toBe(true);
    });
    // isNegative
    (0, globals_1.it)("should return false when given a positive number", () => {
        const num = 1;
        (0, globals_1.expect)(num.isNegative()).toBe(false);
    });
    (0, globals_1.it)("should return true when given a negative number", () => {
        const num = -1;
        (0, globals_1.expect)(num.isNegative()).toBe(true);
    });
    (0, globals_1.it)("should return false when given zero", () => {
        const num = 0;
        (0, globals_1.expect)(num.isNegative()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a decimal number", () => {
        const num = 1.5;
        (0, globals_1.expect)(num.isNegative()).toBe(false);
    });
    // isEven
    (0, globals_1.it)("should return true when given an even number", () => {
        const num = 2;
        (0, globals_1.expect)(num.isEven()).toBe(true);
    });
    (0, globals_1.it)("should return false when given an odd number", () => {
        const num = 1;
        (0, globals_1.expect)(num.isEven()).toBe(false);
    });
    (0, globals_1.it)("should return true when given zero", () => {
        const num = 0;
        (0, globals_1.expect)(num.isEven()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a decimal number", () => {
        const num = 1.5;
        (0, globals_1.expect)(num.isEven()).toBe(false);
    });
    // isOdd
    (0, globals_1.it)("should return false when given an even number", () => {
        const num = 2;
        (0, globals_1.expect)(num.isOdd()).toBe(false);
    });
    (0, globals_1.it)("should return true when given an odd number", () => {
        const num = 1;
        (0, globals_1.expect)(num.isOdd()).toBe(true);
    });
    (0, globals_1.it)("should return false when given zero", () => {
        const num = 0;
        (0, globals_1.expect)(num.isOdd()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a decimal number", () => {
        const num = 1.5;
        (0, globals_1.expect)(num.isOdd()).toBe(true);
    });
    // isDivisibleBy
    (0, globals_1.it)("should return true when given a number divisible by the divisor", () => {
        const num = 2;
        const divisor = 1;
        (0, globals_1.expect)(num.divide(divisor)).toBe(2);
    });
    (0, globals_1.it)("should return false when given a number not divisible by the divisor", () => {
        const num = 2;
        const divisor = 3;
        (0, globals_1.expect)(num.divide(divisor)).toBe(0.6666666666666666);
    });
    // multiply
    (0, globals_1.it)("should return the product of the two numbers", () => {
        const num = 2;
        const multiplier = 3;
        (0, globals_1.expect)(num.multiplay(multiplier)).toBe(6);
    });
    // add
    (0, globals_1.it)("should return the sum of the two numbers", () => {
        const num = 2;
        const adder = 3;
        (0, globals_1.expect)(num.add(adder)).toBe(5);
    });
    // subtract
    (0, globals_1.it)("should return the difference of the two numbers", () => {
        const num = 2;
        const subtractor = 3;
        (0, globals_1.expect)(num.subtract(subtractor)).toBe(-1);
    });
    // isZero
    (0, globals_1.it)("should return false when given a positive number", () => {
        const num = 1;
        (0, globals_1.expect)(num.isZero()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a negative number", () => {
        const num = -1;
        (0, globals_1.expect)(num.isZero()).toBe(false);
    });
    (0, globals_1.it)("should return true when given zero", () => {
        const num = 0;
        (0, globals_1.expect)(num.isZero()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a decimal number", () => {
        const num = 1.5;
        (0, globals_1.expect)(num.isZero()).toBe(false);
    });
    // isBetween
    (0, globals_1.it)("should return true when given a number between the min and max", () => {
        const num = 2;
        const min = 1;
        const max = 3;
        (0, globals_1.expect)(num.isBetween(min, max)).toBe(true);
    });
    (0, globals_1.it)("should return false when given a number not between the min and max", () => {
        const num = 2;
        const min = 3;
        const max = 4;
        (0, globals_1.expect)(num.isBetween(min, max)).toBe(false);
    });
    // isDecimal
    (0, globals_1.it)("should return false when given a positive integer", () => {
        const num = 1;
        (0, globals_1.expect)(num.isDecimal()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a negative integer", () => {
        const num = -1;
        (0, globals_1.expect)(num.isDecimal()).toBe(false);
    });
});
