function Tamagotchi(hungry = false, sleepy = false, bored = true, age = 0) {
    this.feed = function () {
        if (hungry === true) {
            console.log("That was delicious!");
            hungry = false;
            sleepy = true;
        } else {
            console.log("No thanks, I'm full");
        }
    }
    this.sleep = function () {
        if (sleepy === true) {
            console.log("Zzzzzzzz");
            sleepy = false;
            bored = true;
            increaseAge();
        }
    }
    this.play = function () {
        if (bored === true) {
            console.log("Yay! Let's play");
            bored = false;
            hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    }
    this.increaseAge = function () {
        this.age += 1;
        console.log("Happy birthday to me! I am " + age + " old");
    }
}

var dog = new Tamagotchi();

dog.outside = false;

dog.bark = function () {
    console.log("Woof! Woof!");
}

dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors");
        this.outside = true;
        this.bark();
    }
}
dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine...")
        this.outside = false;
    } else {
        console.log("I'm already inside");
    }
}

dog.goOutside();
