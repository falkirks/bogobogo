var bogobogo = require("./index");

var test = [2, 1];
console.log(bogobogo.random(0, 1));
console.log(bogobogo.shuffle(test, 0, test.length-1));
/*
var a = [1, 2, 3, 4, 5, 6, 7];
bogobogo.shuffle(a, 0, a.length-1);
console.log(a);

bogobogo.create(a).then(function(array) {
	console.log(array);
}).start();
*/