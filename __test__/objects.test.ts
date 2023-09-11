import { describe, expect, test, it } from "@jest/globals";
import "../src/objects";

describe("Objects Extensions test cases", () => {
  it("should return true when given an empty object", () => {
    const obj = {};
    expect(obj.isEmpty()).toBe(true);
  });
  it("should return false when given a non-empty object", () => {
    const obj = { a: 1 };
    expect(obj.isEmpty()).toBe(false);
  });
  // Tests that the function returns true for an empty object
  it("should return true when object is empty", () => {
    const obj = {};
    expect(obj.isEmpty()).toBe(true);
  });

  // Tests that the function correctly identifies an empty object
  it("should return true when the object is empty", () => {
    const obj = {};
    expect(obj.isEmptyOrNull()).toBe(true);
  });

  // Tests that an object with properties returns true
  it("should return true when object has properties", () => {
    const obj = { name: "John", age: 30 };
    expect(obj.isValidObject()).toBe(true);
  });
});
