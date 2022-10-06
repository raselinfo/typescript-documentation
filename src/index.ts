interface ICalender {
    firstName: string;
    lastName: string;
    // fullName: () => void;
    fullName(): void;
}

class Rasel implements ICalender {
    firstName: string;
    lastName: string;
    fullName(): void {
        throw new Error("Method not implemented.");
    }
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}