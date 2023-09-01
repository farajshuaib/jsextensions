declare global {
  interface Date {
    isLeapYear(): boolean;
    
  }
}

Date.prototype.isLeapYear = function () {
  const year = this.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

export {};
