console.log("========== LEVEL 1 ==========");

// 1.
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {return this.name;}
    get getAge() {return this.age;}
    get getColor() {return this.color;}
    get getLegs() {return this.legs;}

    set setName(name) {this.name = name;}
    set setAge(age) {this.age = age;}
    set setColor(color) {this.color = color;}
    set setLegs(legs) {this.legs = legs;}

    birthday() {
        this.age++;
        console.log(`${this.name} is turning ${this.age} years old today!`);
    }

    getInfo() {console.log(`${this.name} is ${this.age} years old, has ${this.legs} legs and is colored ${this.color}.`);}
}

// 2.
class Cat extends Animal {
    meow() {console.log(`${this.name} says "Meow!".`);}
}

class Dog extends Animal {
    woof() {console.log(`${this.name} says "Woof!".`);}
}
