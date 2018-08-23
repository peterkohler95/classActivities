var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

if (a === "add") {
    console.log(Number(b) + Number(c));
} else if (a === "subtract") {
    console.log(Number(b) - Number(c));
} else if (a === "multiply") {
    console.log(Number(b) * Number(c));
} else if (a === "divide") {
    console.log(Number(b) / Number(c));
} else if (a === remainder) {
    console.log(Number(b) % Number(c));
} else {
    console.log("cannot compute");
}

