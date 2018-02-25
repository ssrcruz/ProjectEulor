"use strict";

var _royalFlush = require("./royalFlush");

var _royalFlush2 = _interopRequireDefault(_royalFlush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs");

var textFile = fs.readFileSync("./pokerHands.txt").toString('utf-8');
var hands = textFile.split("\n");

var poker = function poker(hands) {
    var playerOne = [];
    var playerTwo = [];

    for (var i = 0; i <= hands.length; i++) {
        var playerOneHand = [];
        var playerTwoHand = [];

        var playerHands = hands[i].split(' ');

        for (var k = 0; k <= playerHands.length; k++) {
            if (k < 5) {
                playerOneHand.push(playerHands[k]);
            } else if (k >= 5) {
                playerTwoHand.push(playerHands[k]);
            }
        }

        playerOne.push(playerOneHand);
        playerTwo.push(playerTwoHand);

        if (i === hands.length - 1) return (0, _royalFlush2.default)(playerOne, playerTwo, hands);
    }
};

poker(hands);