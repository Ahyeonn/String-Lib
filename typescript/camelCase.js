"use strict";
exports.__esModule = true;
exports.camelCase = void 0;
var capitalize_js_1 = require("./capitalize.js");
// Camel Case -> camelCase
function camelCase(str) {
    var splitWords = str.split(' ');
    // loop over the words
    var camelWords = splitWords.map(function (word, i) {
        // loewrcase first word
        if (i === 0) {
            return word.toLowerCase();
        }
        else {
            return (0, capitalize_js_1.capitalize)(word);
        }
    });
    return camelWords.join('');
}
exports.camelCase = camelCase;
