console.log("========== LEVEL 2 ==========");

// 1.
class Bird extends Animal {
    getInfo() { console.log(`${this.name} is a ${this.age}-year old bird, has ${this.legs} legs and is colored ${this.color}.\nLook! It's flying!`); }
}
