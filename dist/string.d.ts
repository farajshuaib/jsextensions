declare global {
    interface String {
        isEmpty(): boolean;
        isEmptyOrNull(): boolean;
        isArabicLetters(): boolean;
        isEnglishLetters(): boolean;
    }
}
export {};
