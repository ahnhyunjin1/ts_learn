import { NumericLiteral } from "typescript";

interface Shape {
    getArea(): number;

}

class Circle implements Shape {
    radius: number;

    constructor(radius: number){
        this.radius=radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shpae {
    width: number;
    height : Number;
    constructor(width: number, height:number){
        this.width=width;
        this.height:height;
    }
}