"use strict";
exports.__esModule = true;
exports.snakeCase = void 0;
var kebobCase_js_1 = require("./kebobCase.js");
//  what the heck  -> what_the_hack
function snakeCase(str) {
    return (0, kebobCase_js_1.kebobCase)(str, '_');
}
exports.snakeCase = snakeCase;
