"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoresInfo = exports.usersInfo = void 0;
exports.usersInfo = Array.from({ length: 3 }, function (val, index) {
    return {
        uid: "".concat(index + 1),
        name: "user-name-".concat(index),
        age: index + 10,
        avatar: "http://www.avatar.com/".concat(index + 1)
    };
});
exports.scoresInfo = Array.from({ length: 2 }, function (val, index) {
    return {
        uid: "".concat(index + 2),
        score: ~~(Math.random() * 10000),
        comments: ~~(Math.random() * 10000),
        stars: ~~(Math.random() * 1000)
    };
});
