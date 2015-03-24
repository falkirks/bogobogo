'use strict';


var SortInstance = function(bogo, array){
	this.bogo = bogo;
	this.array = array;
	this.cb = null;
	this.iterations = 0;
};
SortInstance.prototype.standard = function() {
	process.nextTick((function(){
        for (var n = 1; n < this.array.length; n++) {
        	this.bogo.shuffle(this.array, 0, n);
        	if(!this.bogo.isSorted(this.array, 0, n)){
        		n = 0;
        	}
		}
		if(this.cb != null){
		 	this.cb(this.array);
		}
    }).bind(this));
    return this;
};
SortInstance.prototype.start = function(){
	this.standard();
};
SortInstance.prototype.fast = function() {
	process.nextTick((function(){
        for (var n = 1; n < this.array.length; n++) {
        	while(!this.bogo.isSorted(this.array, 0, n)){
        		this.bogo.shuffle(this.array, 0, n);
        	}
		}
		if(this.cb != null){
		 	this.cb(this.array);
		}
    }).bind(this));
    return this;
};
SortInstance.prototype.then = function(cb){
	this.cb = cb;
	return this;
};

/** ********* **/

/** ********* **/

var BogoBogo = function(){
};
BogoBogo.prototype.random = function(min, max) {
	return Math.floor(min+(max-min)*Math.random());
};
BogoBogo.prototype.shuffle = function(array, start, end) {
    for(var i = start; i <= end; i++){
    	var rand = this.random(start, end);
		var tmp = array[i];
        array[i] = array[rand];
        array[rand] = tmp;
    }
    return array;
};
BogoBogo.prototype.isSorted = function(array, start, end) {
    var last = array[start];
    for(var i = start; i <= end; i++){
		if(last > array[i]){
			return false;
		}
		last = array[i];
    }
    return true;
};
BogoBogo.prototype.create = function(array) {
	return new SortInstance(this, array);
};
BogoBogo.prototype.get = function(array){
	return this.create(array);
};

module.exports = new BogoBogo();
