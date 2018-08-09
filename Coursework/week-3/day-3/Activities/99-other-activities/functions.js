function difference(a, b) {
    return Math.abs(a - b);
}
console.log(difference(2, 6));

function wholeName(first, middle, last) {
    return first + " " + middle + " " + last;
};

console.log(wholeName("Peter", "George", "Kohler"));

function reverse(word) {
    return word.split("").reverse().join("");
}

console.log(reverse("Peter"));

// Bubble sort
var myArray = [3, 1, 3, 6, 2, 9, 4, 5];

function bubbleSort(array) {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(myArray));


// Key up function
$(document).ready(function () {
    $(document).keyup(function () {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var userGuess = event.key.toUpperCase();
            hangman(userGuess); //
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
            userGuess = event.key;
            hangman(); //
        }
    });
});



