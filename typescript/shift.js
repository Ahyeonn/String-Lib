"use strict";
exports.__esModule = true;
exports.shift = void 0;
// Hello World -> ello WorldH
function shift(str, shiftNum) {
    if (shiftNum === void 0) { shiftNum = 1; }
    var splitWords = str.split(''); // [Hello, World]
    var numChrs = splitWords.map(function (word, i) {
        if (i < shiftNum) {
            return word;
        }
    });
    var Chrs = numChrs.join('');
    var slicedWord = str.slice(shiftNum).trim(); // ello World
    return slicedWord + Chrs;
}
exports.shift = shift;
