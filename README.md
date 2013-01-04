# NODE-DOCUMENT-DIFFER-OBJECTDIFF [![Build Status](https://secure.travis-ci.org/grimen/node-document-differ-objectdiff.png)](http://travis-ci.org/grimen/node-document-differ-objectdiff)

**Differ** adapter [objectdiff](https://github.com/NV/objectDiff.js) for [node-document](https://github.com/grimen/node-document) ODM for Node.js.


## Installation

```shell
  $ npm install node-document-differ-objectdiff
```


## Usage

**Basic:**

```javascript
  var Differ = require('node-document-differ-objectdiff');

  var differ = new Differ();

  var a = {foo: 1, bar: "baz"},
      b = {foo: 2, baz: "qux"};

  differ.diff(a, b, function(err, diff, identical) {
    console.log("Equal: %s  \nDiff:\n", identical, diff);
  });
```

For details; see [node-document](https://github.com/grimen/node-document).


## Test

**Local tests:**

```shell
  $ make test
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)
