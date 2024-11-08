// Define a toString prototype method that returns the cat's name, age
// and color separated by space.

function Cat(name, color, gender, height, weight, age) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.age = age;
}

Cat.prototype.toString = function() {
    return `${this.name} ${this.age} ${this.color}`
    // console.log(`${this.name} ${this.age} ${this.color}`);
};

let harmony = new Cat("Harmony", "brown", "female", "1.5 ft", "2 lbs", "1.5");

harmony.toString();