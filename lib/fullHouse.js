"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flush = require("./flush");

var _flush2 = _interopRequireDefault(_flush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullHouse = function fullHouse(playerOneHand, playerTwoHand) {
    var playerOneHandValues = [];
    for (var i = 0; i < playerOneHand.length; i++) {
        var value = playerOneHand[i].split("");
        playerOneHandValues.push(value[0]);
    };

    var playerTwoHandValues = [];
    for (var _i = 0; _i < playerTwoHand.length; _i++) {
        var _value = playerTwoHand[_i].split("");
        playerTwoHandValues.push(_value[0]);
    };

    var counts = {};

    var threeAndAPair = function threeAndAPair(playerOneHandValues) {
        playerOneHandValues.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
            if (counts[x] == 3) {
                var checkPair = playerOneHandValues.filter(function (a) {
                    return a != x;
                });
                for (var _i2 = 0; _i2 < checkPair.length; _i2++) {
                    if (checkPair[_i2] == checkPair[_i2 + 1]) {
                        return true;
                    };
                };
            }
        });
        return false;
    };

    if (threeAndAPair(playerOneHandValues) === true && threeAndAPair(playerTwoHandValues) === false) {
        console.log("Player one wins! ", playerOneHand);
        playerOneWins++;
    } else if (threeAndAPair(playerTwoHandValues) === true && threeAndAPair(playerOneHandValues) === false) {
        console.log("Player two wins! ", playerTwoHand);
        playerTwoWins++;
    } else {
        (0, _flush2.default)(playerOneHand, playerTwoHand);
    };
    threeAndAPair(playerOneHandValues);
    threeAndAPair(playerTwoHandValues);
    //  console.log(threeAndAPair(playerOneHandValues));
}; // Three of a kind and a pair.

exports.default = fullHouse;