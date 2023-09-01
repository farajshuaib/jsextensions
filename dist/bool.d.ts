declare global {
    interface Boolean {
        isTrue(): boolean;
        isFalse(): boolean;
        toggle(): boolean;
    }
}
export {};
