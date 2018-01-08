// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let min = 1;
let max = 20;

let smallestMultiple = (min, max) => {
    for (let i = 1;; i++) {
        let multiplesArray = [];
        // If number is a multiple add number to multiplesArray
        for (let k = min; k <= max; k++) {
            let num = i % k;
            if (num === 0) {
                let data = {};
                data[i] = data[i] || k;
                data[i][k];
                multiplesArray.push(data);
            }
        }
        // If array length is equal to the max, 
        // then you've found the smallest number that evenly divides between all numbers min and max!
        if (multiplesArray.length === max) {
            console.log(i, multiplesArray);
            break;
        }
        
    }
};

smallestMultiple(min, max);