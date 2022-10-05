class Account {
    readonly id: number;
    owner: string;
    private _balance: number

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance
    }
    // Getter Setter ✅
    get balance(): number {
        return this._balance
    }
    set balance(value: number) {
        this._balance = value
    }

    deposit(amount: number) {
        // this.id=50 is is readonly
        if (amount <= 0)
            throw new Error("Invalid amount")
        this._balance += amount
    }
}

const account = new Account(1, "Rasel", 500)
console.log(account instanceof Account)