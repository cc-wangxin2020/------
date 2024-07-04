"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArray = mergeArray;
var object_1 = require("./object");
var DEFAULT_MERGE_OPTIONS = {
    sourceKey: "id",
    targetKey: undefined,
    desc: true,
    sKMap: undefined,
};
/**
 * 循环迭代器
 * TODO:: 对象形式
 * @param min
 * @param max
 * @param desc
 * @returns
 */
function getStepIter(min, max, desc) {
    var _a = desc ? [max, min, -1] : [min, max, 1], start = _a[0], end = _a[1], step = _a[2];
    var hasNext = function () { return desc ? start >= end : end >= start; };
    return {
        hasNext: function () {
            return hasNext();
        },
        get current() {
            return start;
        },
        next: function () {
            return start += step;
        }
    };
}
var MAX_WLAK_COUNT = 10000;
/**
 * 合并数组生成新的数组
 * @param targetArr 目标数组
 * @param sourceArr 需要被合并的数组
 * @param options.desc  是否是从后往前遍历
 * @param options.soureKey  源数组对象的key
 * @param options.targetKey  目标数组对象的key
 * @param options.sKMap  源复制map关系
 * @returns
 */
function mergeArray(targetArr, sourceArr, options) {
    if (targetArr === void 0) { targetArr = []; }
    if (sourceArr === void 0) { sourceArr = []; }
    if (options === void 0) { options = DEFAULT_MERGE_OPTIONS; }
    // 有一个不是数组
    if (!Array.isArray(sourceArr) || !Array.isArray(targetArr)) {
        return targetArr;
    }
    var opt = __assign(__assign({}, DEFAULT_MERGE_OPTIONS), options);
    // 判断sourceKey和sourceProperties
    if (typeof opt.sourceKey !== "string") {
        console.error("无效的soureKey");
        return targetArr;
    }
    var wTypes = ["string", "number"];
    // 转为对象
    var objMap = sourceArr.reduce(function (obj, cur) {
        if (wTypes.includes(typeof cur[opt.sourceKey])) {
            obj[cur[opt.sourceKey]] = cur;
        }
        return obj;
    }, Object.create(null));
    var desc = opt.desc, sourceKey = opt.sourceKey, _a = opt.targetKey, targetKey = _a === void 0 ? sourceKey : _a, _b = opt.sKMap, sKMap = _b === void 0 ? null : _b;
    var sourceLen = sourceArr.length;
    var hitCounts = 0;
    var walkCounts = 0;
    var resultArr = Array.from(targetArr);
    var targetLen = targetArr.length;
    var tempTObj, keyValue, tempSObj;
    var stepIter = getStepIter(0, targetLen - 1, desc);
    while (stepIter.hasNext()) {
        var index = stepIter.current;
        walkCounts++;
        if (walkCounts > MAX_WLAK_COUNT) {
            console.error("mergeArray \u904D\u5386\u6B21\u6570\u8D85\u8FC7\u6700\u5927\u904D\u5386\u6B21\u6570 ".concat(MAX_WLAK_COUNT, ", \u7EC8\u6B62\u904D\u5386\uFF0C\u8BF7\u68C0\u67E5\u7A0B\u5E8F\u903B\u8F91"));
            break;
        }
        tempTObj = resultArr[index];
        // 目标比对的键值
        keyValue = tempTObj[targetKey];
        if (keyValue == null || (tempSObj = objMap[keyValue]) == null || tempSObj[sourceKey] != keyValue) {
            stepIter.next();
            continue;
        }
        // TODO:: 可以把 mergeObject作为参数，让外面自定义
        resultArr[index] = (0, object_1.mergeObject)(tempTObj, tempSObj, undefined, sKMap);
        hitCounts++;
        if (hitCounts >= sourceLen) {
            break;
        }
        stepIter.next();
    }
    console.log("mergeArray:: targetArr(".concat(targetLen, "), sourceArr(").concat(sourceLen, "), \u7EDF\u8BA1\uFF1A\u904D\u5386\u6B21\u6570").concat(walkCounts, ", \u547D\u4E2D\u6B21\u6570").concat(hitCounts));
    return resultArr;
}
