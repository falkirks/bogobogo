bogobogo
========

> Simple implementation of Bogobogosort

**NOTE:** For obvious reasons, there isn't a clear document describing how Bogobogosort works. This implementation includes both popular versions with the default being the slower one.

#### Slow (default)
This version will **probably** continue sorting until the heat-death of the universe on any sizable list. It has an average complexity of O(N!1!2!3!...N!) and a worst case of O(∞).

1. Get first `n` (`n` starts at 2) items of list.
2. Shuffle `n` items (uses Fisher-Yates shuffle).
3. If `n` items are not sorted, set `n` back to 2. If they are sorted, then `n` increases by one unless `n` already includes the whole array, in which case, the sort is **finished**.
4. Return to step 1.

#### Fast
This version is much faster as it will attempt to sort an array segment ∞ times instead of 1. This still yields a worst case of O(∞) but an average complexity which isn't as cool.

1. Get first `n` (`n` starts at 2) items of list.
2. Shuffle `n` items (uses Fisher-Yates shuffle).
3. If `n` items are not sorted, return to step 2. 
4. If `n` includes who array then sort is **finished**, if not, increase `n` by one and return to step 1.


## Install

```sh
$ npm install --save bogobogo
```

## Tests
**Warning:** The tests could theoretically run forever. They likely won't, but it could happen.

```sh
$ npm test
```

## Usage

```js
var bogobogo = require('bogobogo');

bogobogo.create([66, 22, 3, 5, 1, 19]).then(function(result){
	console.log(result);
}).standard();

bogobogo.create([6, 111, 44, 1, 5, 23]).then(function(result){
	console.log(result);
}).fast();
```


## License

MIT © [Falkirks](falkirks.com)

