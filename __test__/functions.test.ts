import { describe, expect, test, it } from "@jest/globals";
import "../src/functions";

describe("Functions Extensions test cases", () => {
  it("should return true when given a function", () => {
    const func = function () {};
    expect(func.isFunction()).toBe(true);
  });
  
});
