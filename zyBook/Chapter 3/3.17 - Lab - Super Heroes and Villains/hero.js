class SuperHuman {
    name;
    powerLevel;

    constructor(name, powerLevel) {
        this.name = name;
        this.powerLevel = powerLevel;
    }
}

class SuperHero extends SuperHuman {
    constructor(name, alias, powerLevel) {
        super(name, powerLevel);
        this.alias = alias;
    }

    battle(SuperVillain) {
        return this.powerLevel >= SuperVillain.powerLevel;
    }
}

class SuperVillain extends SuperHuman {
    constructor(name, alias, powerLevel) {
        super(name, powerLevel);
        this.alias = alias;
    }

    getEvilChuckle() {
        return "Ha ha ha!";
    }
}