function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
};

let bob = new Person("Bob", 21);
let sue = new Person("Sue", 40);

bob.sayHello();
sue.sayHello();
