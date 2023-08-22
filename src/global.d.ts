interface Array<T> {
  isEqual(arr: T[]): boolean;
  isEmpty(): boolean;
  isEmptyOrNull(): boolean;
}

interface String {
  isEmpty(): boolean;
  isEmptyOrNull(): boolean;
  isArabicLetters(): boolean;
  isEnglishLetters(): boolean;
}

interface Boolean {
  isTrue(): boolean;
  isFalse(): boolean;
  toggle: () => boolean;
}
