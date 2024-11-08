function Person(name, age) {
  this.name = name; // Public property
  this.age = age; // Public property

  // Private variable (not attached to `this`)
  let secret;

  // Public method to set the private variable
  this.setSecret = function (s) {
    secret = s; // Accessing private variable directly
  };

  // Public method to get the private variable
  this.getSecret = function () {
    return secret; // Accessing private variable directly
  };

  // Incorrect method to access `secret`
  // this.getPartialSecret = function() {
  //     return this.secret.substr(0, 5) + "...";     // `this.secret` should be just `secret` because `secret` is a local variable, not a property attached to `this`
  // };

  // Correct method to access `secret`
  //   this.getPartialSecret = function () {
  //     return secret.substr(0, 5) + '...';
  //   };
}

// Incorrect prototype method to access `secret`
// Prototype methods do not have direct access to private (local) variables
// Person.prototype.getPartialSecret = function() {
//     return secret.substr(0, 5) + "...";
// };

// Correct prototype method to access `secret`
Person.prototype.getPartialSecret = function () {
  return this.getSecret().substr(0, 5) + '...';
};

let bob = new Person('Bob', 21);
bob.setSecret('I have mutant powers!');

console.log(bob.getSecret()); // I have mutant powers!
console.log(bob.secret); // undefined
console.log(bob.getPartialSecret()); // I hav...
