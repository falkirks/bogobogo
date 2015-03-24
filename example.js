var bogobogo = require("./index");

var a = [1, 2, 3, 4, 5, 6, 7];
bogobogo.shuffle(a, 0, a.length-1);
console.log(a);

bogobogo.getBogoBogo(a).then(function(array) {
	console.log(array);
}).start();
