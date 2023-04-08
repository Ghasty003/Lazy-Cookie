class LazyCookie {
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
    getItem(name) {
        return this.cookieObject()[name];
    }
    setItem(key, value, { expires, maxAge } = {}) {
        document.cookie = `${key}=${value}; max-Age=${maxAge}; expires=${expires}`;
    }
    deleteItem(name) {
        document.cookie = `${name}=; max-Age=-1`;
    }
    clear() {
        const arrayOfCookiesKeys = Object.keys(this.cookieObject());
        for (let a of arrayOfCookiesKeys) {
            document.cookie = `${a}=; max-Age=-1`;
        }
    }
}
const lazycookie = new LazyCookie();
export default lazycookie;
