// If "wallFeet" is in localStorage, store the result in bedroomLength variable.
//  Otherwise, do not change bedroomLength.

let bedroomLength = 'initial';

if (localStorage.getItem("wallFeet")) {
    bedroomLength = localStorage.getItem("wallFeet");
}