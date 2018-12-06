function Character(name, profession, gender, age, strength, HP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    this.printStats = function () {
        console.log(`${this.name} `);
    };
    this.isAlive = function () {
        console.log(HP);
        if (HP > 0) {
            console.log('Is Alive')
        } else {
            console.log('Dead...')
        }
    };
    this.attack = function (char) {
        char.HP -= this.strength;
    };
    this.levelUp = function () {
        console.log(this.age);
        this.age++;
        this.strength += 5;
        this.HP += 25;
    }
}

var char1 = new Character('Mario', 'Plumber', 'Male', 40, 90, 100);
var char2 = new Character('Luigi', 'Plumber', 'Male', 42, 89, 100);

char1.printStats();
char1.levelUp();
char1.printStats();

