declare global {
    interface Number {
        isPositive(): boolean;
        isNegative(): boolean;
        isEven(): boolean;
        isOdd(): boolean;
        isZero(): boolean;
        isBetween(min: number, max: number): boolean;
        isDecimal(): boolean;
    }
}
export {};
