'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.playerTwoWins = exports.playerOneWins = undefined;

var _straightFlush = require('./straightFlush');

var _straightFlush2 = _interopRequireDefault(_straightFlush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playerOneWins = exports.playerOneWins = 0;
var playerTwoWins = exports.playerTwoWins = 0;
var royalFlush = function royalFlush(playerOne, playerTwo, hands) {
    var playerOneHand = playerOne;
    var playerTwoHand = [];
    for (var i = 0; i < playerTwo.length; i++) {
        playerTwoHand.push(playerTwo[i].filter(Boolean));
    };

    var spades = ['TS', 'JS', 'QS', 'KS', 'AS'];
    var clubs = ['TC', 'JC', 'QC', 'KC', 'AC'];
    var hearts = ['TH', 'JH', 'QH', 'KH', 'AH'];
    var diamonds = ['TD', 'JD', 'QD', 'KD', 'AD'];

    var winningHands = [spades, clubs, hearts, diamonds];

    for (var b = 0; b < hands.length; b++) {
        for (var a = 0; a < winningHands.length; a++) {
            var playerOneMatchingValues = [];
            var playerTwoMatchingValues = [];
            var playerOneValue = 0;
            var playerTwoValue = 0;

            for (var c = 0; c < winningHands[a].length; c++) {
                var playerOneIncludes = playerOneHand[b].includes(winningHands[a][c]);
                var playerTwoIncludes = playerTwoHand[b].includes(winningHands[a][c]);
                if (playerOneIncludes === true) {
                    playerOneValue++;
                    playerOneMatchingValues.push(winningHands[a][c]);
                }
                if (playerTwoIncludes === true) {
                    playerTwoValue++;
                    playerTwoMatchingValues.push(winningHands[a][c]);
                }
            }

            if (playerOneValue === 5 && playerTwoValue < 5) {
                exports.playerOneWins = playerOneWins += 1;
                console.log(playerOneMatchingValues, playerOneHand[b], playerOneWins);
                console.log(b + " Player 1 Wins! by royal flush", playerOneWins);
                break;
            } else if (playerTwoValue === 5 && playerOneValue < 5) {
                exports.playerTwoWins = playerTwoWins += 1;
                console.log(playerTwoMatchingValues, playerTwoHand[b], playerTwoWins);
                console.log(b + " Player 2 Wins! by royal flush", playerTwoWins);
                break;
            } else if (playerOneValue === 5 && playerTwoValue === 5) {
                console.log("It's a tie");
            } else if (a === winningHands.length - 1) {
                (0, _straightFlush2.default)(playerOneHand[b], playerTwoHand[b]);
            };
        }
    }
    console.log("Player 1 Wins: ", playerOneWins);
    console.log("Player 2 Wins: ", playerTwoWins);
};

exports.default = royalFlush;