class KeyValuePair<Tkey, TValue>{
    constructor(public key: Tkey, public value: TValue) { }
}

const pair1 = new KeyValuePair<number, string>(1, "Rasel")
const pair2 = new KeyValuePair<string, string>("1", "Rasel")
// it's automatic infer
const pair3 = new KeyValuePair(5, "hossain")


console.log(pair1, pair2, pair3)