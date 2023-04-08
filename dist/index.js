class LazyCookie {
    /**
     * Returns total number of key/value pair that exist.
     * @readonly
     * @returns {number}
    */
    length;
    constructor() {
        this.length = document.cookie.split("; ").length;
    }
    cookieObject() {
        const map = new Map();
        for (let i = 0; i < this.length; i++) {
            const cookieIndex = document.cookie.split("; ")[i].split("=");
            map.set(cookieIndex[0], cookieIndex[1]);
        }
        const cookieObj = Object.fromEntries(map);
        return cookieObj;
    }
    /**
     * Returns the current value associated with the given key, or undefined if the given key does not exist.
     * @method
     * @param {string} key - key
     * @returns {string}
     */
    getItem(key) {
        return this.cookieObject()[key];
    }
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
    setItem(key, value, { expires, maxAge } = {}) {
        document.cookie = `${key}=${value}; max-Age=${maxAge}; expires=${expires}`;
    }
    /**
     * @method
     * @param {string} name - key
     * @returns {void}
     */
    deleteItem(name) {
        document.cookie = `${name}=; max-Age=-1`;
    }
    /**
     * Removes all key/value pairs, if there are any.
     * @method
     * @returns {void}
     */
    clear() {
        const arrayOfCookiesKeys = Object.keys(this.cookieObject());
        for (let a of arrayOfCookiesKeys) {
            document.cookie = `${a}=; max-Age=-1`;
        }
    }
}
const lazycookie = new LazyCookie();
export default lazycookie;
