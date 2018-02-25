'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fullHouse = require('./fullHouse');

var _fullHouse2 = _interopRequireDefault(_fullHouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fourOfAKind = function fourOfAKind(playerOneHand, playerTwoHand) {
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    var getAllCardValues = function getAllCardValues(playerHand, values) {
        var cardValues = [];
        // Split values from player one hands
        for (var a = 0; a < playerHand.length; a++) {
            var value = playerHand[a].split('');
            cardValues.push(value[0]);
        };
        // check if the hand has four cards of the same values

        for (var b = 0; b < values.length; b++) {
            var cardValue = values[b];
            var count = 0;
            for (var c = 0; c < cardValues.length; c++) {
                if (cardValues[c] === cardValue) {
                    count++;
                }
            }

            var win = false;
            if (count === 4) {
                console.log("Wins by four of a kind!");
                var _win = true;
            }
            return win;
        }
    };

    if (getAllCardValues(playerOneHand, values) === true && getAllCardValues(playerTwoHand, values) === false) {
        playerOneHand++;
    } else if (getAllCardValues(playerTwoHand, values) === true && getAllCardValues(playerOneHand, values) === false) {
        playerTwoHand++;
    } else {
        (0, _fullHouse2.default)(playerOneHand, playerTwoHand);
    };
}; // check if both hands have four cards of the same value
exports.default = fourOfAKind;