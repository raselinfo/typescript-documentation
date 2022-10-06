abstract class Shape {
    constructor(public color: string) { }

    //    abstract render(): void { console.log("Shape rendering...")}
    abstract render(): void;
}

abstract class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }
    
}

const c1=new Circle(10,"red")
// c1.render()