const testFunc = <TValue>(value: TValue) => {
    return value
}
testFunc<number>(5)
testFunc("Rasel") // it's automatic infer


// In class
class Utils {
    static createArray<TValue>(value: TValue) {
        return [value]
    }
}

Utils.createArray<number>(5)
Utils.createArray("Rasel")