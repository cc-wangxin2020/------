"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = isObject;
exports.isIndexLike = isIndexLike;
function isObject(value) {
    var type = typeof value;
    return value != null && type === 'object';
}
var reIsUint = /^(?:0|[1-9]\d*)$/;
// https://github.com/lodash/lodash/blob/master/.internal/isIndex.js
function isIndexLike(value) {
    var type = typeof value;
    return (type === 'number' ||
        (type !== 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0);
}
