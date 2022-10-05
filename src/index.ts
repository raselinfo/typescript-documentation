class Person {
    constructor(public firstName: string, public lastName: string) {

    }
    get fullName() {
        return this.firstName + this.lastName
    }
    walk() {
        console.log(this.fullName, "is walking.....")
    }
}
// Person is inherited by Student Class
class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    talking() {
        console.log(this.fullName, "is talking.......")
    }
}

const student1 = new Student(1, "Rasel", "Hossain")
student1.talking()