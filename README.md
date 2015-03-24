bogobogo
========

> Simple implementation of Bogobogosort

1. Get first `n` (`n` starts at 2) items of list.
2. Shuffle `n` items.
3. If `n` items are not sorted set `n` back to two.
4. Return to step 1.


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

