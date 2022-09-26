"use strict";
exports.__esModule = true;
exports.isEmpty = void 0;
// Abc def -> isEmpty("Abc def") // false
function isEmpty(str) {
    var trimmedWords = str.trim(); // '   abc \t def '
    if (trimmedWords.length === 0) {
        return true;
    }
    var splitChrs = trimmedWords.split('');
    for (var _i = 0, splitChrs_1 = splitChrs; _i < splitChrs_1.length; _i++) {
        var chr = splitChrs_1[_i];
        if (chr != ' ' && chr != '\n' && chr != '\t') {
            return false;
        }
    }
    return true;
}
exports.isEmpty = isEmpty;
console.log(isEmpty(' \tAbc def'));
