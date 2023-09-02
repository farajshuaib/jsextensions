declare global {
    interface Array<T> {
        isEqual(arr: T[]): boolean;
        isEmpty(): boolean;
        isNotEmpty(): boolean;
        isEmptyOrNull(): boolean;
        groupBy(key: string): any;
        removeDuplicates(): any;
        sortBy(key: string): any;
    }
}
export {};
