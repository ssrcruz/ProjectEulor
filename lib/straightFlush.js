'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fourOfAKind = require('./fourOfAKind');

var _fourOfAKind2 = _interopRequireDefault(_fourOfAKind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var straightFlush = function straightFlush(playerOneHand, playerTwoHand) {

    var spades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'];
    var clubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'];
    var hearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'];
    var diamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'];

    var winningValues = [spades, clubs, hearts, diamonds];

    // compare hands   
    var compareArrays = function compareArrays(array1, array2) {
        if (array1.length !== array2.length) return false;
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    };

    // check if a hand matches any of the possible winning hands
    var allHands = function allHands(array, playerMatchingValues) {
        var winningHands = [];

        for (var a = 0; a <= 5; a++) {
            var hand = array.slice(a, a + 5);
            winningHands.push(hand);
        };

        for (var i = 0; i < winningHands.length; i++) {
            if (compareArrays(winningHands[i], playerMatchingValues)) {
                console.log(winningHands[i], playerMatchingValues);
                return true;
            }
        }
        return false;
    };

    // check if hand is a straight flush 
    var isStraightFlush = function isStraightFlush(playerMatchingValues) {
        var arrayOfValues = [];
        for (var i = 0; i < playerMatchingValues.length; i++) {
            var cardValues = playerMatchingValues[i].split('');
            if (cardValues[1] === 'S') {
                var isMatch = allHands(clubs, playerMatchingValues.sort());
                return isMatch;
                break;
            }

            if (cardValues[1] === 'C') {
                var _isMatch = allHands(clubs, playerMatchingValues.sort());
                return _isMatch;
                break;
            }

            if (cardValues[1] === 'H') {
                var _isMatch2 = allHands(clubs, playerMatchingValues.sort());
                return _isMatch2;
                break;
            }

            if (cardValues[1] === 'D') {
                var _isMatch3 = allHands(clubs, playerMatchingValues.sort());
                return _isMatch3;
                break;
            }
            arrayOfValues.push(cardValues);
        }
    };

    for (var i = 0; i < winningValues.length; i++) {
        var playerOneMatchingValues = [];
        var playerTwoMatchingValues = [];

        var playerOneValue = 0;
        var playerTwoValue = 0;

        for (var c = 0; c < winningValues[i].length; c++) {
            var playerOneIncludes = playerOneHand.includes(winningValues[i][c]);
            var playerTwoIncludes = playerTwoHand.includes(winningValues[i][c]);

            if (playerOneIncludes === true) {
                playerOneValue++;
                playerOneMatchingValues.push(winningValues[i][c]);
            };
            if (playerTwoIncludes === true) {
                playerTwoValue++;
                playerTwoMatchingValues.push(winningValues[i][c]);
            };
        };

        // If player one has 5 matching values, check if they are all consecutive values with same suit
        if (playerOneValue === 5 && playerTwoValue < 5) {
            if (isStraightFlush(playerOneMatchingValues)) playerOneWins++;
        }

        if (playerTwoValue === 5 < playerOneValue < 5) {
            if (isStraightFlush(playerTwoMatchingValues)) playerTwoWins++;
        };

        if (playerOneValue < 5 && playerTwoValue < 5) return (0, _fourOfAKind2.default)(playerOneHand, playerTwoHand);
    }
}; // Check if all cards are consecutive values of same suit.
exports.default = straightFlush;