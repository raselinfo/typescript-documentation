class Person {
    constructor(public firstName: string, public lastName: string) {

    }
    get fullName() {
        return this.firstName + this.lastName
    }
    walk() {
        console.log(this.fullName, "is walking.....")
    }
    age(){
        return 10
    }
}
// Person is inherited by Teacher Class
class Teacher extends Person {

    override get fullName() {
        return "Professor" + super.fullName
    }

    get getFirstName() {
        return super.age()
    }
}
const teacher1 = new Teacher("Rasel", "Hossain")
console.log(teacher1.getFirstName)