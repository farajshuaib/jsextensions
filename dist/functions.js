"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Function.prototype.isFunction = function () {
    return this instanceof Function;
};
Function.prototype.retry = function (times, delay) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        var fn = function () {
            try {
                var result = _this();
                resolve(result);
            }
            catch (error) {
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
Function.prototype.delayExecution = function (delay) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var result = _this();
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        }, delay);
    });
};
