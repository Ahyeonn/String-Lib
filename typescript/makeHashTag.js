"use strict";
exports.__esModule = true;
exports.makeHashTag = void 0;
// Amazing bongo drums for sale -> ['#amazing', '#bongo', '#drums']
function makeHashTag(str) {
    var lowerWords = str.toLowerCase();
    var splitWords = lowerWords.split(' ');
    var wordsList = [];
    if (splitWords.length > 3) {
        var sortedArr = splitWords.sort(function (a, b) { return b.length - a.length; }); // descending order [#amazzing, #bongo, #drums, #sale, #for]
        var threeWords = sortedArr.slice(0, 3);
        for (var _i = 0, threeWords_1 = threeWords; _i < threeWords_1.length; _i++) {
            var word = threeWords_1[_i];
            var poundedWord = '#'.concat(word);
            wordsList.push(poundedWord);
        }
    }
    else {
        for (var _a = 0, splitWords_1 = splitWords; _a < splitWords_1.length; _a++) {
            var word = splitWords_1[_a];
            var poundedWord = '#'.concat(word);
            wordsList.push(poundedWord);
        }
    }
    return wordsList;
}
exports.makeHashTag = makeHashTag;
