import { describe, expect, test, it } from "@jest/globals";
import "../src/bools";

describe("Booleans Extensions test cases", () => {
    it("should return true when given a true boolean", () => {
        const bool = true;
        expect(bool.isTrue()).toBe(true);
    });
    it("should return false when given a false boolean", () => {
        const bool = false;
        expect(bool.isTrue()).toBe(false);
    });
    it("should return true when given a false boolean", () => {
        const bool = false;
        expect(bool.isFalse()).toBe(true);
    });
    it("should return false when given a true boolean", () => {
        const bool = true;
        expect(bool.isFalse()).toBe(false);
    });
    it("should return true when given a true boolean", () => {
        const bool = true;
        expect(bool.toggle()).toBe(false);
    })
});