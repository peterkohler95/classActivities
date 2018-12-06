function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry === true) {
            this.hungry = false;
            console.log('That was yummy!');
        } else {
            console.log('No thanks, I\'m full');
        }
    }
    this.sleep = function () {
        if (this.sleepy === true) {
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
            console.log('Zzzzzzz');
        } else {
            console.log('No way! I\'m not tired');
        }
    }
    this.play = function () {
        if (this.bored === true) {
            this.bored = false;
            this.hungry = true;
            console.log('Yay, let\'s play');
        }
    }
    this.increaseAge = function () {
        this.age++;
        console.log(`Happy Birthday to me! I am ${this.age} years old`);
    }
}

var dog = new DigitalPal();

dog.outside = false;
dog.bark = function () {
    console.log('Woof! Woof!')
};
dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay, i love the outdoors");
        this.outside = true;
        this.bark();
    } else {
        console.log('We are already outside tho...');
    }
}
dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside");
    }
}

var cat = new DigitalPal();

cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!");
}
cat.destroyFurniture = function () {
    if (houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("Take that furniture");
        this.bored = false;
        this.sleepy = true;
    } else {
        console.log("trashed");
    }
}
cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

dog.goOutside();
dog.goInside();
dog.play();

var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            name: 'funcToRun',
            message: 'Which function do you want to run?',
            choices: ["goOutside", "goInside"]
        }
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        if (answers.funcToRun === "goOutside") {
            dog.goOutside();
        } else {
            dog.goInside();
        }
    });