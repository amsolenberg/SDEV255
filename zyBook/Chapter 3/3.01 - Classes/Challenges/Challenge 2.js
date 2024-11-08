// Create a puppy class with private property weight and both a getter and setter
// for that property called getWeight and setWeight. The constructor should take
// a parameter to initialize the private property.

function Puppy(initialWeight) {
  let weight = initialWeight;

  this.getWeight = function () {
    return weight;
    // console.log(weight);
  };

  this.setWeight = function (newWeight) {
    weight = newWeight;
  };
}

let apollo = new Puppy('2.5lbs');

apollo.getWeight();
apollo.setWeight('150lbs');
apollo.getWeight();
apollo.setWeight('-200lbs');
apollo.getWeight();
