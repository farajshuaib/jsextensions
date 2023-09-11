declare global {
  interface Array<T> {
    isEqual(arr: T[]): boolean;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    isEmptyOrNull(): boolean;
    groupBy(key: string): any;
    removeDuplicates(): any;
    sortBy(key: string): any;
    firstOrDefault(): any;
    lastOrDefault(): any;
    firstOrElse(Else: any): any;
    skip(count: number): any;
    take(count: number): any;
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

Array.prototype.firstOrDefault = function () {
  if (this.isEmptyOrNull()) return null;
  return this[0];
};

Array.prototype.lastOrDefault = function () {
  if (this.isEmptyOrNull()) return null;
  return this[this.length - 1];
};

Array.prototype.firstOrElse = function (Else: any) {
  if (this.isEmptyOrNull()) return Else;
  return this[0];
};

Array.prototype.skip = function (count: number) {
  return this.slice(count, this.length);
};

Array.prototype.take = function (count: number) {
  return this.slice(0, count);
};

export {};
