import { describe, expect, test, it } from "@jest/globals";
import "../src/strings";

describe("Strings Extensions test cases", () => {
  it("should return true when given an empty string", () => {
    const str = "";
    expect(str.isEmpty()).toBe(true);
  });
  it("should return false when given a non-empty string", () => {
    const str = "Hello";
    expect(str.isEmpty()).toBe(false);
  });
  it("should return true when given a string containing only whitespace characters", () => {
    const str = "   ";
    expect(str.isEmpty()).toBe(false);
  });

  // isArabicLetters
  it("should return true when given a string containing only arabic letters", () => {
    const str = "مرحبا";
    expect(str.isArabicLetters()).toBe(true);
  });

  it("should return false when given a string containing only english letters", () => {
    const str = "Hello";
    expect(str.isArabicLetters()).toBe(false);
  });

  it("should return false when given a string containing arabic and english letters", () => {
    const str = "مرحبا Hello";
    expect(str.isArabicLetters()).toBe(true);
  });

  it("should return false when given a string containing arabic letters and numbers", () => {
    const str = "مرحبا 123";
    expect(str.isArabicLetters()).toBe(true);
  });

  // isEnglishLetters
  it("should return false when given a string containing only arabic letters", () => {
    const str = "مرحبا";
    expect(str.isEnglishLetters()).toBe(false);
  });

  it("should return true when given a string containing only english letters", () => {
    const str = "Hello";
    expect(str.isEnglishLetters()).toBe(true);
  });

  it("should return false when given a string containing arabic and english letters", () => {
    const str = "مرحبا Hello";
    expect(str.isEnglishLetters()).toBe(false);
  });

  it("should return false when given a string containing arabic letters and numbers", () => {
    const str = "مرحبا 123";
    expect(str.isEnglishLetters()).toBe(false);
  });

  // toCamelCase
  it("should return camelCase when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toCamelCase()).toBe("helloWorld");
  });

  it("should return camelCase when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toCamelCase()).toBe("helloWorld");
  });

  // test toPascalCase  method
  it("should return PascalCase when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toPascalCase()).toBe("HelloWorld");
  });

  it("should return PascalCase when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toPascalCase()).toBe("HelloWorld");
  });

  // test toSnakeCase  method
  it("should return snake_case when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toSnakeCase()).toBe("hello_world");
  });

  it("should return snake_case when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toSnakeCase()).toBe("hello_world");
  });

  // test toKebabCase  method
  it("should return kebab-case when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toKebabCase()).toBe("hello-world");
  });

  it("should return kebab-case when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toKebabCase()).toBe("hello-world");
  });

  // test toTitleCase  method
  it("should return Title Case when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toTitleCase()).toBe("Hello World");
  });

  it("should return Title Case when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toTitleCase()).toBe("Hello World");
  });

  // test toLowerCaseFirstLetter  method
  it("should return lower case first letter when given a string containing spaces", () => {
    const str = "Hello world";
    expect(str.toLowerCaseFirstLetter()).toBe("hello world");
  });

  it("should return lower case first letter when given a string containing dashes", () => {
    const str = "Hello-world";
    expect(str.toLowerCaseFirstLetter()).toBe("hello-world");
  });

  // test toUpperCaseFirstLetter  method
  it("should return upper case first letter when given a string containing spaces", () => {
    const str = "hello world";
    expect(str.toUpperCaseFirstLetter()).toBe("Hello world");
  });

  it("should return upper case first letter when given a string containing dashes", () => {
    const str = "hello-world";
    expect(str.toUpperCaseFirstLetter()).toBe("Hello-world");
  });
});
