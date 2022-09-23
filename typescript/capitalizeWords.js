"use strict";
exports.__esModule = true;
exports.capitalizeWords = void 0;
var capitalize_js_1 = require("./capitalize.js");
// do all the things -> Do All The Things
function capitalizeWords(str) {
    var wordsList = str.split(' '); // [do],[all],[the],[things]
    var upperWords = wordsList.map(function (word) { return (0, capitalize_js_1.capitalize)(word); }); // upperWords = [Do], [All], ['The'], ['Things']
    return upperWords.join(' '); // Do All The Things
}
exports.capitalizeWords = capitalizeWords;
