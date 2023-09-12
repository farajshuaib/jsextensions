declare global {
  interface String {
    isEmpty(): boolean;
    isEmptyOrNull(): boolean;
    isArabicLetters(): boolean;
    isEnglishLetters(): boolean;
    toCamelCase(): string;
    toPascalCase(): string;
    toSnakeCase(): string;
    toKebabCase(): string;
    toTitleCase(): string;
    toLowerCaseFirstLetter(): string;
    toUpperCaseFirstLetter(): string;
    utf8_to_b64(str: string): string;
    b64_to_utf8(str: string): string;
    hexToRGB(h: string): string;
  }
}

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
  return /[\u0600-\u06FF]/.test(this as string);
};

/**
 * @description Makes Sure that the string contans only english letters.
 * @memberof String
 * @method isEnglishLetters
 * @returns {boolean} True if the string contans only english letters.
 */
String.prototype.isEnglishLetters = function () {
  return /^[A-Za-z]+$/.test(this as string);
};

String.prototype.toCamelCase = function () {
  // should remove space and hyphen and underscore and capitalize the first letter of each word
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
    // spaces and hyphens
  })
    .replace(/\s+/g, "")
    .replace("-", "")
    .replace("_", "");
};

String.prototype.toPascalCase = function () {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
    return word.toUpperCase();
  })
    .replace(/\s+/g, "")
    .replace("-", "")
    .replace("_", "");
};

String.prototype.toSnakeCase = function () {
  return this.replace("-", "_").replace(" ", "_").toLowerCase();
};

String.prototype.toKebabCase = function () {
  return this.replace("_", "-").replace(" ", "-").toLowerCase();
};

String.prototype.toTitleCase = function () {
  return this.replace("-", " ")
    .replace("_", " ")
    .replace(" ", " ")
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

String.prototype.toLowerCaseFirstLetter = function () {
  return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.toUpperCaseFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Usage:
// utf8_to_b64("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
// b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"
String.prototype.utf8_to_b64 = function (str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
};
// Usage:
// b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"
String.prototype.b64_to_utf8 = function (str: string) {
  try {
    return decodeURIComponent(escape(window.atob(str)));
  } catch (e) {
    return str;
  }
};

String.prototype.hexToRGB = function (h: string) {
  let r: number | string = 0,
    g: number | string = 0,
    b: number | string = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
};

export {};
