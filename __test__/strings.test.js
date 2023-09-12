"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
require("../src/strings");
(0, globals_1.describe)("Strings Extensions test cases", () => {
    (0, globals_1.it)("should return true when given an empty string", () => {
        const str = "";
        (0, globals_1.expect)(str.isEmpty()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a non-empty string", () => {
        const str = "Hello";
        (0, globals_1.expect)(str.isEmpty()).toBe(false);
    });
    (0, globals_1.it)("should return true when given a string containing only whitespace characters", () => {
        const str = "   ";
        (0, globals_1.expect)(str.isEmpty()).toBe(false);
    });
    // isArabicLetters
    (0, globals_1.it)("should return true when given a string containing only arabic letters", () => {
        const str = "مرحبا";
        (0, globals_1.expect)(str.isArabicLetters()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a string containing only english letters", () => {
        const str = "Hello";
        (0, globals_1.expect)(str.isArabicLetters()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a string containing arabic and english letters", () => {
        const str = "مرحبا Hello";
        (0, globals_1.expect)(str.isArabicLetters()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a string containing arabic letters and numbers", () => {
        const str = "مرحبا 123";
        (0, globals_1.expect)(str.isArabicLetters()).toBe(true);
    });
    // isEnglishLetters
    (0, globals_1.it)("should return false when given a string containing only arabic letters", () => {
        const str = "مرحبا";
        (0, globals_1.expect)(str.isEnglishLetters()).toBe(false);
    });
    (0, globals_1.it)("should return true when given a string containing only english letters", () => {
        const str = "Hello";
        (0, globals_1.expect)(str.isEnglishLetters()).toBe(true);
    });
    (0, globals_1.it)("should return false when given a string containing arabic and english letters", () => {
        const str = "مرحبا Hello";
        (0, globals_1.expect)(str.isEnglishLetters()).toBe(false);
    });
    (0, globals_1.it)("should return false when given a string containing arabic letters and numbers", () => {
        const str = "مرحبا 123";
        (0, globals_1.expect)(str.isEnglishLetters()).toBe(false);
    });
    // toCamelCase
    (0, globals_1.it)("should return camelCase when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toCamelCase()).toBe("helloWorld");
    });
    (0, globals_1.it)("should return camelCase when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toCamelCase()).toBe("helloWorld");
    });
    // test toPascalCase  method
    (0, globals_1.it)("should return PascalCase when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toPascalCase()).toBe("HelloWorld");
    });
    (0, globals_1.it)("should return PascalCase when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toPascalCase()).toBe("HelloWorld");
    });
    // test toSnakeCase  method
    (0, globals_1.it)("should return snake_case when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toSnakeCase()).toBe("hello_world");
    });
    (0, globals_1.it)("should return snake_case when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toSnakeCase()).toBe("hello_world");
    });
    // test toKebabCase  method
    (0, globals_1.it)("should return kebab-case when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toKebabCase()).toBe("hello-world");
    });
    (0, globals_1.it)("should return kebab-case when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toKebabCase()).toBe("hello-world");
    });
    // test toTitleCase  method
    (0, globals_1.it)("should return Title Case when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toTitleCase()).toBe("Hello World");
    });
    (0, globals_1.it)("should return Title Case when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toTitleCase()).toBe("Hello World");
    });
    // test toLowerCaseFirstLetter  method
    (0, globals_1.it)("should return lower case first letter when given a string containing spaces", () => {
        const str = "Hello world";
        (0, globals_1.expect)(str.toLowerCaseFirstLetter()).toBe("hello world");
    });
    (0, globals_1.it)("should return lower case first letter when given a string containing dashes", () => {
        const str = "Hello-world";
        (0, globals_1.expect)(str.toLowerCaseFirstLetter()).toBe("hello-world");
    });
    // test toUpperCaseFirstLetter  method
    (0, globals_1.it)("should return upper case first letter when given a string containing spaces", () => {
        const str = "hello world";
        (0, globals_1.expect)(str.toUpperCaseFirstLetter()).toBe("Hello world");
    });
    (0, globals_1.it)("should return upper case first letter when given a string containing dashes", () => {
        const str = "hello-world";
        (0, globals_1.expect)(str.toUpperCaseFirstLetter()).toBe("Hello-world");
    });
});
