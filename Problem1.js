/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var num = 1000;

var multiples = (num) => {
    var sum = 0;
    
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    
    console.log(sum);
};

multiples(num);