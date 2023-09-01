declare global {
  interface Object {
    isEmpty(): boolean;
    isEmptyOrNull(): boolean;
    groupBy(array: any[], key: string): any;
    isValidObject(): boolean;
  }
}

Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

Object.prototype.isEmptyOrNull = function () {
  return this == null || Object.keys(this).length === 0;
};

Object.prototype.groupBy = function (array: any[], key: string) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

Object.prototype.isValidObject = function () {
  return this != null && typeof this === "object" && !Array.isArray(this);
};

export {};
