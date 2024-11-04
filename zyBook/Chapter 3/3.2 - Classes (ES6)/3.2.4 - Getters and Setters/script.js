class Angle {
    constructor(angleRadians) {
        this.radians = angleRadians;
    }

    get degrees() {
        return this.radians * 180.0 / Math.PI;
    }

    set degrees(angleDegrees) {
        this.radians = angleDegrees * Math.PI / 180.0;
    }
}

let angle1 = new Angle(Math.PI);
console.log(angle1.degrees);
angle1.degrees = 270.0;
console.log(angle1.radians);