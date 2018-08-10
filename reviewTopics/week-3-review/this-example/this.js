function foo() {
    console.log(this);

}



var poodle = {
    bark: function () {

    },
    bounce: foo
}



poodle.bounce();