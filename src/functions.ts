declare global {
  interface Function {
    isFunction(): boolean;
    retry(times: number, delay: number): any;
    delayExecution(delay: number): any;
  }
}

Function.prototype.isFunction = function () {
  return this instanceof Function;
};

Function.prototype.retry = function (times: number, delay: number) {
  return new Promise((resolve, reject) => {
    const fn = () => {
      try {
        const result = this();
        resolve(result);
      } catch (error) {
        if (times === 0) {
          reject(error);
          return;
        }
        times--;
        setTimeout(fn, delay);
      }
    };
    fn();
  });
};

Function.prototype.delayExecution = function (delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = this();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};

export {};
