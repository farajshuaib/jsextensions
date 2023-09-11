declare global {
  interface Date {
    isLeapYear(): boolean;
    fromNow(): string;
    
  }
}






Date.prototype.fromNow = function(){
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 30 * DAY;
    const YEAR = 12 * MONTH;
    const now = new Date();
    const diff = now.getTime() - this.getTime();


    const parseDate = (timestamp: number) => {
      let result = ""
      let diff = timestamp;
  
      while(diff > 0) {  
          if(diff < SECOND) {
              diff = 0;
          } else if(diff < MINUTE) {
              result += `${Math.floor(diff / SECOND)} seconds `;
              diff = diff % SECOND;
          } else if (diff < HOUR) {
              result += `${Math.floor(diff / MINUTE)} minutes `
              diff = diff % MINUTE;
          } else if (diff < DAY) {
              result += `${Math.floor(diff / HOUR)} hours `
              diff = diff % HOUR;
          } else if (diff < MONTH) {
              result += `${Math.floor(diff / DAY)} days `
              diff = diff % DAY;
          } else if (diff < YEAR) {
              result += `${Math.floor(diff / MONTH)} months `
              diff = diff % MONTH;
          } else {
              result += `${Math.floor(diff / YEAR)} years `
              diff = diff % YEAR;
          }
      }
  
      return result + 'ago';
  }

    return parseDate(diff);
}

Date.prototype.isLeapYear = function () {
  const year = this.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

export {};
