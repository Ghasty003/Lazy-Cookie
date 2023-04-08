interface OptionalProp {
    expires?: Date;
    maxAge?: number;
}
declare class LazyCookie {
    /**
     * Returns total number of key/value pair that exist.
     * @readonly
     * @returns {number}
    */
    readonly length: number;
    constructor();
    private cookieObject;
    /**
     * Returns the current value associated with the given key, or undefined if the given key does not exist.
     * @method
     * @param {string} key - key
     * @returns {string}
     */
    getItem(key: string): string;
    /**
     * Sets the value of the pair identified by key to value,
     * creating a new key/value pair if none existed for key previously.
     * It Overrides already existing key/value pair.
     * @method
     * @param {string} key
     * @param {string} value
     * @param {Date} expires - when cookie should expire in Date format.
     * @param {number} maxAge - when cookie should expire in millisecond.
     * @returns {void}
     */
    setItem(key: string, value: string, { expires, maxAge }?: OptionalProp): void;
    /**
     * @method
     * @param {string} name - key
     * @returns {void}
     */
    deleteItem(name: string): void;
    /**
     * Removes all key/value pairs, if there are any.
     * @method
     * @returns {void}
     */
    clear(): void;
}
declare const lazycookie: LazyCookie;
export default lazycookie;
