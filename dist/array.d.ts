declare global {
    interface Array<T> {
        isEqual(arr: T[]): boolean;
        isEmpty(): boolean;
        isEmptyOrNull(): boolean;
    }
}
export {};
