# deep-keys [![Build Status](https://travis-ci.org/a8m/deep-keys.svg?branch=master)](https://travis-ci.org/a8m/deep-keys)

> Creates an array composed of the own enumerable property names(including nested) of an object.

## Install

```sh
$ npm install --save deep-keys
```

## Usage

```js
var deepKeys = require('deep-keys');

var obj1 = {
  a: 1,
  b: { c: 1 },
  c: { d: { e: 1 }, f: 1 },
  d: { e: { f: { g: 1, h: 2 } } },
  e: 2,
  f: { g: [] }
};
deepKeys(obj1);
//=> ['a', 'b.c', 'c.d.e', 'c.f', 'd.e.f.g', 'd.e.f.h', 'e', 'f.g']

var obj2 = {
  type: 'customer',
  details: {
    name: 'Ariel', age: 26, address: { city: 'Tel Aviv', country: 'Israel' }
  },
  isActive: true
};
deepKeys(obj2);
//=> ['type', 'details.name', 'details.age', 'details.address.city', 'details.address.country', 'isActive']
```


## License

MIT © [Ariel Mashraki](https://github.com/a8m)
