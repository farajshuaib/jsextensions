declare global {
    interface Function {
        isFunction(): boolean;
        retry(times: number, delay: number): any;
        delayExecution(delay: number): any;
    }
}
export {};
