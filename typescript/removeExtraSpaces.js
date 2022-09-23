"use strict";
exports.__esModule = true;
exports.removeExtraSpaces = void 0;
//    Hello    world! -> Hello world
function removeExtraSpaces(str) {
    var trimmedWords = str.trim();
    var splitWords = trimmedWords.split(' ');
    var filteredWords = splitWords.filter(function (word) { return word !== ''; });
    return filteredWords.join(' ');
}
exports.removeExtraSpaces = removeExtraSpaces;
