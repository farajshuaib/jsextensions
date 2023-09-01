"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Makes Sure that the string is empty.
 * @memberof String
 * @method isEmpty
 * @returns {boolean} True if the string length = 0.
 */
String.prototype.isEmpty = function () {
    return this.length === 0;
};
/**
 * @description Makes Sure that the string is empty or null.
 * @memberof String
 * @method isEmptyOrNull
 * @returns {boolean} True if the string length = 0 or null.
 */
String.prototype.isEmptyOrNull = function () {
    return this == null || this.length === 0;
};
/**
 * @description Makes Sure that the string contans only arabic letters.
 * @memberof String
 * @method isArabicLetters
 * @returns {boolean} True if the string contans only arabic letters.
 */
String.prototype.isArabicLetters = function () {
    return /[\u0600-\u06FF]/.test(this);
};
/**
 * @description Makes Sure that the string contans only english letters.
 * @memberof String
 * @method isEnglishLetters
 * @returns {boolean} True if the string contans only english letters.
 */
String.prototype.isEnglishLetters = function () {
    return /^[A-Za-z]+$/.test(this);
};
