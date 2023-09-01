declare global {
    interface Object {
        isEmpty(): boolean;
        isEmptyOrNull(): boolean;
        groupBy(array: any[], key: string): any;
        isValidObject(): boolean;
    }
}
export {};
