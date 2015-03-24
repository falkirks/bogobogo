bogobogo
========

> Simple implementation of Bogobogosort

**NOTE:** For obvious reasons, there isn't a clear document describing how Bogobogosort works. This implmentation includes both popular versions with the default being the slower one.

#### Slow (default)

1. Get first `n` (`n` starts at 2) items of list.
2. Shuffle `n` items (uses Fisher-Yates shuffle).
3. If `n` items are not sorted, set `n` back to 2. If they are sorted, then `n` increases by one unless `n` already includes the whole array, in which case, the sort is **finished**.
4. Return to step 1.

#### "Fast"
1. Get first `n` (`n` starts at 2) items of list.
2. Shuffle `n` items (uses Fisher-Yates shuffle).
3. If `n` items are not sorted, return to step 2. 
4. If `n` includes who array then sort is **finished**, if not, increase `n` by one and return to step 1.


## Install

```sh
$ npm install --save bogobogo
```


## Usage

```js
var bogobogo = require('bogobogo');

bogobogo.create([66, 22, 3, 5, 1, 19]).then(function(result){
	console.log(result);
}).start();
```


## License

MIT © [Falkirks](falkirks.com)

