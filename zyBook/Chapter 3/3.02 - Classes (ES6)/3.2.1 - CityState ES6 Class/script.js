class CityState {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }

  toHTML() {
    return this.city + ',&nbsp;' + this.state;
  }
}

let Austin = new CityState('Austin', 'Texas');
let Madison = new CityState('Madison', 'Wisconsin');
console.log(Austin.toHTML());
