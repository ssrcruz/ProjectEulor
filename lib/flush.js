"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var flush = function flush(playerOneHand, playerTwoHand) {
    var suits = function suits(playerHand) {
        var hand = [];
        playerHand.forEach(function (card) {
            var suit = card.split("");
            hand.push(suit[1]);
        });

        var compare = function compare(hand) {
            hand.every(function (value, _, array) {
                console.log(array[0] === value);
            });
        };

        console.log(compare(hand));
    };

    suits(playerOneHand);
    suits(playerTwoHand);
    console.log(suits(playerOneHand), suits(playerTwoHand));
};

exports.default = flush;