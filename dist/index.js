"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomEntry = exports["default"] = void 0;

var JonFuncExample = function JonFuncExample() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : words;
  var word = randomEntry(arr);
  return "Jon almost ".concat(word, " this weekend");
};

var randomEntry = function randomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.randomEntry = randomEntry;
var words = ["drank", "drove", "died", "ate", "fell", "became", "broke", "blew"];
console.warn("JonFuncExample >>>", JonFuncExample(words));
var _default = JonFuncExample;
exports["default"] = _default;