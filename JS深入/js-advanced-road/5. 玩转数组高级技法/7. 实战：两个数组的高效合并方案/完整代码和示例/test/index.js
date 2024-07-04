"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = require("../lib/array");
var data = require("./data");
var usersInfo = data.usersInfo, scoresInfo = data.scoresInfo;
var arr = (0, array_1.mergeArray)(usersInfo, scoresInfo, {
    sourceKey: "uid",
    targetKey: "uid",
    sKMap: {
        "score": "score.score",
        "comments": "score.comments",
        "stars": "stars"
    }
});
console.log("arr", arr);
