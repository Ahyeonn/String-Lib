"use strict";
exports.__esModule = true;
exports.capitalize = void 0;
function capitalize(str) {
    // If empty string, return empty string
    if (str.length === 0) {
        return str;
    }
    // First Character
    var firstChr = str[0];
    // Change the first character to upper case
    var upperCase = firstChr.toUpperCase();
    // All the letters other than the first letter
    var otherChrs = str.slice(1);
    return upperCase + otherChrs;
}
exports.capitalize = capitalize;
