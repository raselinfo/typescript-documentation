abstract class Shape {
    constructor(public color: string) { }

    //    abstract render(): void { console.log("Shape rendering...")}
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }
    override render(): void {
        console.log("Circle is rendering...")
    }
}

const c1=new Circle(10,"red")
c1.render()