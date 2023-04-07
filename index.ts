interface OptionalProp {
    expires?: number;
    maxAge?: number;
}


class LazyCookie {

    /*
    public readonly length: number;

    public constructor() {
        this.length = document.cookie.split("; ").length;
    }

    private cookieObject() {
        const map = new Map();

        for (let i = 0; i < this.length; i++) {
            const cookieIndex = document.cookie.split("; ")[i].split("=");

            map.set(cookieIndex[0], cookieIndex[1]);
        }

        const cookieObj = Object.fromEntries(map);

        return cookieObj;
    }


    public getItem(name: string) {
        return this.cookieObject()[name];
    }

    public setItem(key: string, value: string, { expires, maxAge }: OptionalProp) {
        document.cookie = `${key}=${value}; max-Age=${maxAge}; expires=${expires}`;
    }

    public deleteItem(name: string) {
        document.cookie = `${name}=; max-Age=-1`;
    }

    public clear() {
        const arrayOfCookiesKeys = Object.keys(this.cookieObject());
    
        for (let a of arrayOfCookiesKeys) {
          document.cookie = `${a}=; max-Age=-1`;
        }
    } */

    public hello() {
        console.log("Hello world");
    }
}


const lazycookie = new LazyCookie();


export default lazycookie;