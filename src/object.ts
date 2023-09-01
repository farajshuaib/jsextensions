declare global {
  interface Object {
    isEmpty(): boolean;
    isEmptyOrNull(): boolean;
    groupBy(key: string): any;
  }
}

Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};

Object.prototype.isEmptyOrNull = function () {
  return this == null || Object.keys(this).length === 0;
};

Object.prototype.groupBy = function (key: string) {
  return this.reduce((acc: any, obj: any) => {
    const property = obj[key];
    acc[property] = acc[property] || [];
    acc[property].push(obj);
    return acc;
  }, {});
};

export {};
