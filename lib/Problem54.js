"use strict";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs = require("fs");

var textFile = fs.readFileSync("./pokerHands.txt").toString('utf-8');
var hands = textFile.split("\n");

var playerOneWins = 0;
var playerTwoWins = 0;

poker = function poker(hands) {
    var playerOne = [];
    var playerTwo = [];

    for (var _i = 0; _i <= hands.length; _i++) {
        var playerOneHand = [];
        var playerTwoHand = [];

        var playerHands = hands[_i].split(' ');

        for (var k = 0; k <= playerHands.length; k++) {
            if (k < 5) {
                playerOneHand.push(playerHands[k]);
            } else if (k >= 5) {
                playerTwoHand.push(playerHands[k]);
            }
        }

        playerOne.push(playerOneHand);
        playerTwo.push(playerTwoHand);

        if (_i === hands.length - 1) return royalFlush(playerOne, playerTwo, hands);
    }
};

royalFlush = function royalFlush(playerOne, playerTwo, hands) {
    var playerOneHand = playerOne;
    var playerTwoHand = [];
    for (i in playerTwo) {
        playerTwoHand.push(playerTwo[i].filter(Boolean));
    };

    var spades = ['TS', 'JS', 'QS', 'KS', 'AS'];
    var clubs = ['TC', 'JC', 'QC', 'KC', 'AC'];
    var hearts = ['TH', 'JH', 'QH', 'KH', 'AH'];
    var diamonds = ['TD', 'JD', 'QD', 'KD', 'AD'];

    var winningHands = [spades, clubs, hearts, diamonds];

    for (b in hands) {
        for (var _a = 0; _a < winningHands.length; _a++) {
            var playerOneMatchingValues = [];
            var playerTwoMatchingValues = [];
            var playerOneValue = 0;
            var playerTwoValue = 0;

            for (c in winningHands[_a]) {
                var playerOneIncludes = playerOneHand[b].includes(winningHands[_a][c]);
                var playerTwoIncludes = playerTwoHand[b].includes(winningHands[_a][c]);
                if (playerOneIncludes === true) {
                    playerOneValue++;
                    playerOneMatchingValues.push(winningHands[_a][c]);
                }
                if (playerTwoIncludes === true) {
                    playerTwoValue++;
                    playerTwoMatchingValues.push(winningHands[_a][c]);
                }
            }

            if (playerOneValue === 5 && playerTwoValue < 5) {
                playerOneWins++;
                console.log(playerOneMatchingValues, playerOneHand[b], playerOneWins);
                console.log(b + " Player 1 Wins! by royal flush", playerOneWins);
                break;
            } else if (playerTwoValue === 5 && playerOneValue < 5) {
                playerTwoWins++;
                console.log(playerTwoMatchingValues, playerTwoHand[b], playerTwoWins);
                console.log(b + " Player 2 Wins! by royal flush", playerTwoWins);
                break;
            } else if (playerOneValue === 5 && playerTwoValue === 5) {
                console.log("It's a tie");
            } else if (_a === winningHands.length - 1) {
                straightFlush(playerOneHand[b], playerTwoHand[b]);
            };
        }
    }
    console.log("Player 1 Wins: ", playerOneWins);
    console.log("Player 2 Wins: ", playerTwoWins);
};

// Check if all cards are consecutive values of same suit.
straightFlush = function straightFlush(playerOneHand, playerTwoHand) {

    var spades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'];
    var clubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'];
    var hearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'];
    var diamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'];

    var winningValues = [spades, clubs, hearts, diamonds];

    // compare hands   
    var compareArrays = function compareArrays(array1, array2) {
        if (array1.length !== array2.length) return false;
        for (var _i2 = 0; _i2 < array1.length; _i2++) {
            if (array1[_i2] !== array2[_i2]) return false;
        }
        return true;
    };

    // check if a hand matches any of the possible winning hands
    var allHands = function allHands(array, playerMatchingValues) {
        var winningHands = [];

        for (var _a2 = 0; _a2 <= 5; _a2++) {
            var hand = array.slice(_a2, _a2 + 5);
            winningHands.push(hand);
        };

        for (i in winningHands) {
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
        for (i in playerMatchingValues) {
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

    for (i in winningValues) {
        var playerOneMatchingValues = [];
        var playerTwoMatchingValues = [];

        var playerOneValue = 0;
        var playerTwoValue = 0;

        for (c in winningValues[i]) {
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

        if (playerOneValue < 5 && playerTwoValue < 5) return fourOfAKind(playerOneHand, playerTwoHand);
    }
};

// check if both hands have four cards of the same value
fourOfAKind = function fourOfAKind(playerOneHand, playerTwoHand) {
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    var getAllCardValues = function getAllCardValues(playerHand, values) {
        var cardValues = [];
        // Split values from player one hands
        for (a in playerHand) {
            var value = playerHand[a].split('');
            cardValues.push(value[0]);
        };
        // check if the hand has four cards of the same values

        for (b in values) {
            var cardValue = values[b];
            var count = 0;
            for (c in cardValues) {
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
        fullHouse(playerOneHand, playerTwoHand);
    };
};

fullHouse = function fullHouse(playerOneHand, playerTwoHand) {
    console.log(playerOneHand, playerTwoHand);
};

console.log(poker(hands));