"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObject = mergeObject;
var _1 = require(".");
var string_1 = require("./string");
/**
 * 获取对象属性
 * https://github.com/lodash/lodash/blob/master/.internal/baseGet.js
 * @param obj
 * @param key
 * @param defaultValue
 * @returns
 */
function getProperty(obj, key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (!(0, _1.isObject)(obj)) {
        return defaultValue;
    }
    var path = (0, string_1.default)(key);
    var index = 0;
    var length = path.length;
    while (obj != null && index < length) {
        obj = obj[path[index++]];
    }
    return (index && index == length) ? obj : undefined || defaultValue;
}
/**
 * 设置属性值
 * https://github.com/lodash/lodash/blob/master/.internal/baseSet.js
 * @param obj
 * @param path
 * @param value
 * @returns
 */
function setProperty(obj, path, value) {
    if (value === void 0) { value = undefined; }
    if (!(0, _1.isObject)(obj)) {
        return obj;
    }
    var keys = (0, string_1.default)(path);
    var length = keys.length;
    var lastIndex = length - 1;
    var index = -1;
    var nested = obj;
    while (nested != null && ++index < length) {
        var key = keys[index];
        var newValue = value;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = undefined;
            if (newValue === undefined) {
                newValue = (0, _1.isObject)(objValue) ? objValue : (_1.isIndexLike[keys[index + 1]] ? [] : {});
            }
        }
        nested[key] = newValue;
        nested = nested[key];
    }
    return obj;
}
/**
 * 提取属性生成新的对象
 */
function extractObject(object, kMap) {
    if (kMap === void 0) { kMap = null; }
    if (object === null || typeof object !== "object") {
        return object;
    }
    var ret = Object.create(null);
    if (kMap == null) {
        return Object.assign(ret, object);
    }
    Object.keys(kMap).reduce(function (obj, key) {
        // 只复制自己有的属性
        if (object.hasOwnProperty(key)) {
            setProperty(obj, kMap[key], getProperty(object, key));
        }
        return obj;
    }, ret);
    return ret;
}
/**
 * 合并对象生成新的对象
 * // TODO:: 无限合并
 * @param obj1
 * @param obj2
 * @param ob1KMap
 * @param ob2KMap
 * @returns
 */
function mergeObject(obj1, obj2, ob1KMap, ob2KMap) {
    if (ob1KMap === void 0) { ob1KMap = null; }
    if (ob2KMap === void 0) { ob2KMap = null; }
    var ret = Object.create(null);
    Object.assign(ret, extractObject(obj1, ob1KMap));
    Object.assign(ret, extractObject(obj2, ob2KMap));
    return ret;
}
