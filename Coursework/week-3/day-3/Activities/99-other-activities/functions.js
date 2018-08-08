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