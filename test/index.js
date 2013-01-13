
var Differ = require('../../node-document-differ');

module.exports = Differ.Spec('ObjectDiff', {
  module: require('..'),
  engine: require('objectdiff'),
  options: {}
});
