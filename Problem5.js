/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const v8 = require('v8');
const statistics = v8.getHeapStatistics();
//console.log(statistics);

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let smallestMultiple = () => {
    let array = [];
    for (let i = 1;; i++) {
        let someArray = [];
        for (let k = 1; k <= 20; k++) {
//            console.log(k);
            let num = i % k;
            if (num === 0) {
                let data = {};
                data[i] = data[i] || k;
                data[i][k];
                someArray.push(data);
//                array.push(data);
            }
        }
//        console.log(someArray.length, 20);
        if (someArray.length === 20) {
            console.log(i, someArray);
            break;
        }
        
    }
//    console.log(array);
};

smallestMultiple();