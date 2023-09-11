import { describe, expect, test, it } from "@jest/globals";
import "../src/numbers";

describe("Numbers Extensions test cases", () => {
  // isPositive
  it("should return true when given a positive number", () => {
    const num = 1;
    expect(num.isPositive()).toBe(true);
  });
  it("should return false when given a negative number", () => {
    const num = -1;
    expect(num.isPositive()).toBe(false);
  });
  it("should return false when given zero", () => {
    const num = 0;
    expect(num.isPositive()).toBe(false);
  });
  it("should return false when given a decimal number", () => {
    const num = 1.5;
    expect(num.isPositive()).toBe(true);
  });

  // isNegative
  it("should return false when given a positive number", () => {
    const num = 1;
    expect(num.isNegative()).toBe(false);
  });

  it("should return true when given a negative number", () => {
    const num = -1;
    expect(num.isNegative()).toBe(true);
  });

  it("should return false when given zero", () => {
    const num = 0;
    expect(num.isNegative()).toBe(false);
  });

  it("should return false when given a decimal number", () => {
    const num = 1.5;
    expect(num.isNegative()).toBe(false);
  });

  // isEven
  it("should return true when given an even number", () => {
    const num = 2;
    expect(num.isEven()).toBe(true);
  });

  it("should return false when given an odd number", () => {
    const num = 1;
    expect(num.isEven()).toBe(false);
  });

  it("should return true when given zero", () => {
    const num = 0;
    expect(num.isEven()).toBe(true);
  });

  it("should return false when given a decimal number", () => {
    const num = 1.5;
    expect(num.isEven()).toBe(false);
  });

  // isOdd
  it("should return false when given an even number", () => {
    const num = 2;
    expect(num.isOdd()).toBe(false);
  });

  it("should return true when given an odd number", () => {
    const num = 1;
    expect(num.isOdd()).toBe(true);
  });

  it("should return false when given zero", () => {
    const num = 0;
    expect(num.isOdd()).toBe(false);
  });

  it("should return false when given a decimal number", () => {
    const num = 1.5;
    expect(num.isOdd()).toBe(true);
  });

  // isDivisibleBy
  it("should return true when given a number divisible by the divisor", () => {
    const num = 2;
    const divisor = 1;
    expect(num.divide(divisor)).toBe(2);
  });

  it("should return false when given a number not divisible by the divisor", () => {
    const num = 2;
    const divisor = 3;
    expect(num.divide(divisor)).toBe(0.6666666666666666);
  });
  // multiply
  it("should return the product of the two numbers", () => {
    const num = 2;
    const multiplier = 3;
    expect(num.multiplay(multiplier)).toBe(6);
  });
  // add
  it("should return the sum of the two numbers", () => {
    const num = 2;
    const adder = 3;
    expect(num.add(adder)).toBe(5);
  });
  // subtract
  it("should return the difference of the two numbers", () => {
    const num = 2;
    const subtractor = 3;
    expect(num.subtract(subtractor)).toBe(-1);
  });

  // isZero
  it("should return false when given a positive number", () => {
    const num = 1;
    expect(num.isZero()).toBe(false);
  });

  it("should return false when given a negative number", () => {
    const num = -1;
    expect(num.isZero()).toBe(false);
  });

  it("should return true when given zero", () => {
    const num = 0;
    expect(num.isZero()).toBe(true);
  });

  it("should return false when given a decimal number", () => {
    const num = 1.5;
    expect(num.isZero()).toBe(false);
  });

  // isBetween
  it("should return true when given a number between the min and max", () => {
    const num = 2;
    const min = 1;
    const max = 3;
    expect(num.isBetween(min, max)).toBe(true);
  });

  it("should return false when given a number not between the min and max", () => {
    const num = 2;
    const min = 3;
    const max = 4;
    expect(num.isBetween(min, max)).toBe(false);
  });

  // isDecimal
  it("should return false when given a positive integer", () => {
    const num = 1;
    expect(num.isDecimal()).toBe(false);
  });

  it("should return false when given a negative integer", () => {
    const num = -1;
    expect(num.isDecimal()).toBe(false);
  });
});
