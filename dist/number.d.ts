declare global {
    interface Number {
        isPositive(): boolean;
        isNegative(): boolean;
        isEven(): boolean;
        isOdd(): boolean;
        isZero(): boolean;
        isBetween(min: number, max: number): boolean;
        isDecimal(): boolean;
        add(num: number): number;
        multiplay(num: number): number;
        divide(num: number): number;
        subtract(num: number): number;
    }
}
export {};
