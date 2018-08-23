function equal(a, b) {
    if (a === b) {
        console.log("equal");
    } else {
        console.log("not equal")
    }
}

equal(process.argv[2], process.argv[3])

a = process.argv[2];
b = process.argv[3];

if (a === b) {
    console.log("equal2");
} else {
    console.log("not equal 2");
}