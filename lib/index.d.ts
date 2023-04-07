interface OptionalProp {
    expires?: number;
    maxAge?: number;
}
declare class LazyCookie {
    readonly length: number;
    constructor();
    private cookieObject;
    getItem(name: string): any;
    setItem(key: string, value: string, { expires, maxAge }: OptionalProp): void;
    deleteItem(name: string): void;
    clear(): void;
}
declare const lazycookie: LazyCookie;
export default lazycookie;
