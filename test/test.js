var assert = require("assert");
var bogobogo = require('../');

describe('Bogobogo', function(){
    describe('#isSorted()', function(){
        it('should return false when specified array segment is not in ascending order', function(){
            assert.equal(true, bogobogo.isSorted([1, 5, 10, 55, 323], 0, 4));
            assert.equal(false, bogobogo.isSorted([77, 2, 45, 3, 4], 0, 4));
        });
    });
    describe('#shuffle()', function(){
        it('should only modify the specified section of array', function(){
            assert.deepEqual(bogobogo.shuffle([1, 2, 3, 4, 5, 6], 0, 2).slice(3), [4, 5, 6]);
            assert.deepEqual(bogobogo.shuffle([1, 2, 3, 4, 5, 6], 0, 0), [1, 2, 3, 4, 5, 6]);
        });
    });
    describe('#create()', function(){
        it('should return a valid SortInstance', function(){
            assert.deepEqual(bogobogo.create([1, 2, 3]).array, [1, 2, 3]);
        });
    });
});
describe('SortInstance', function(){
    describe('#standard', function(){
        it('should call cb with array in ascending order', function(){
            bogobogo.create([2,1]).then(function(result){
                assert.deepEqual(result, [1,2]);
            }).standard();
            bogobogo.create([77, 3, 2]).then(function(result){
                assert.deepEqual(result, [2, 3, 77]);
            }).standard();
        });
    });
    describe('#fast', function(){
        it('should call cb with array in ascending order', function(){
            bogobogo.create([2,1]).then(function(result){
                assert.deepEqual(result, [1,2]);
            }).fast();
            bogobogo.create([77, 2, 3]).then(function(result){
                assert.deepEqual(result, [2, 3, 77]);
            }).fast();
        });
    });
    describe('#fast', function(){
        it('should set cb property', function(){
            assert.equal(bogobogo.create([]).then(1).cb, 1);
            assert.equal(bogobogo.create([]).then("Hello").cb, "Hello");
        });
    });
});