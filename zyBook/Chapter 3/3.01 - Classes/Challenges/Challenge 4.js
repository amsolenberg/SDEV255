// Make Earth inherit from Planet by assigning Earth with a copy of Planet's 
// prototype and setting the Earth class' prototype constructor to Earth's
// constructor function.

function Planet() {
    // class constructor code
}

function Earth() {
    Planet.call(this);
}

Earth.prototype = Object.create(Planet.prototype);
Earth.prototype.constructor = Earth;