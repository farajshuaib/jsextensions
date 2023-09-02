declare global {
    interface Object {
        isEmpty(): boolean;
        isEmptyOrNull(): boolean;
        isValidObject(): boolean;
    }
}
export {};
