function Character(name, profession, gender, age, strength, HP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    this.printStats = function () {
        console.log(this)
    }
    this.isAlive = function () {
        if (HP > 0) {
            console.log("You are ALIVE");
        } else {
            console.log("You are DEAD");
        }
    }
    this.attack = function (otherCharacter) {
        otherCharacter.HP -= this.strength;
    }
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.HP += 25;
    }
}

var char1 = new Character("Pete", "unemployed", "male", 23, 9, 100);
var char2 = new Character("Mario", "Plumber", "male", 41, 5, 100);


char2.printStats();
char1.attack(char2);
char2.printStats();

