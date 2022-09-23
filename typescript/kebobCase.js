"use strict";
exports.__esModule = true;
exports.kebobCase = void 0;
var removeExtraSpaces_js_1 = require("./removeExtraSpaces.js");
// Hello world -> hello-world
function kebobCase(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var lowerWords = str.toLowerCase();
    var splitChrs = lowerWords.split('');
    var filterdWords = splitChrs.filter(function (chr) {
        var code = chr.charCodeAt(0); // get character code for the chracterr at index zero
        if (code > 96 && code < 123) { // keep letters 
            return true;
        }
        else if (code > 47 && code < 58) { // keep numbers
            return true;
        }
        else if (code === 32 || code === 45) { // keep hyphen
            return true;
        }
        return false;
    });
    var joinedWords = filterdWords.join('');
    // remove extra spaces
    var spaceFree = (0, removeExtraSpaces_js_1.removeExtraSpaces)(joinedWords); //use removeExtraSpaces function to remove spaces
    return spaceFree.split(' ').join(separator);
}
exports.kebobCase = kebobCase;
