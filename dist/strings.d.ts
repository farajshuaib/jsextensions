declare global {
    interface String {
        isEmpty(): boolean;
        isEmptyOrNull(): boolean;
        isArabicLetters(): boolean;
        isEnglishLetters(): boolean;
        toCamelCase(): string;
        toPascalCase(): string;
        toSnakeCase(): string;
        toKebabCase(): string;
        toTitleCase(): string;
        toSentenceCase(): string;
        toLowerCaseFirstLetter(): string;
        toUpperCaseFirstLetter(): string;
        utf8_to_b64(str: string): string;
        b64_to_utf8(str: string): string;
        hexToRGB(h: string): string;
    }
}
export {};
