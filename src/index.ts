class Account {

    constructor(
        public readonly id: number,
        public readonly owner: string,
        private _balance: number) {
        // Not need to assign variable like "this.id=id"
    }
    // Getter Setter ✅
    get balance(): number {
        return this._balance
    }
    set balance(value: number) {
        this._balance = value
    }

    public deposit(amount: number) {
        // this.id=50 is is readonly
        if (amount <= 0)
            throw new Error("Invalid amount")
        this._balance += amount
    }
}

const account = new Account(1, "Rasel", 500)
account.balance = 600
console.log(account.balance)