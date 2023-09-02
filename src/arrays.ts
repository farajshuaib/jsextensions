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
Array.prototype.isEqual = function (arr: any[]) {
  if (this.length !== arr.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== arr[i]) return false;
  }
  return true;
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};
Array.prototype.isNotEmpty = function () {
  return this.length > 0;
};
Array.prototype.isEmptyOrNull = function () {
  return this == null || this.length === 0;
};

Array.prototype.groupBy = function (key: string) {
  return this.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

Array.prototype.removeDuplicates = function () {
  // remove duplicates from an array of objects
  return this.filter(
    (item: any, index: number, self: any) =>
      index ===
      self.findIndex((t: any) => t.id === item.id && t.name === item.name)
  );
};

Array.prototype.sortBy = function (key: string) {
  return this.sort((a: any, b: any) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

export {};
