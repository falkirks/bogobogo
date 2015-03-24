var bogobogo = require("./index");

var a = [1, 2, 3, 4, 5, 6, 7];
bogobogo.shuffle(a, 0, a.length-1);
console.log(a);
//console.log(bogobogo.shuffle([1,3,4,5,5,3], 0, 3));

bogobogo.getBogoBogo(a).then(function(array) {
	console.log(array);
}).start();
