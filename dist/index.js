"use strict";
class Account {
    constructor() {
        this._balance = 100;
        this.name = "Rasel";
    }
    get balance() {
        return this._balance;
    }
}
const ac1 = new Account();
console.log(ac1);
//# sourceMappingURL=index.js.map