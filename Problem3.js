let input = 13195;

let largestPrimeFactor = (input) => {
    let sum = 0;
    let array = [];
    
    // Take square root of input
    let num = Math.sqrt(input);
    // round number
    let roundedNum = Math.round(num);

    for (let i = 2; i <= input; i++) {
        // If i is greater than the rounded number, stop the program
        if ( i > roundedNum) break;
        // If i evenly divides into input, add i to the array
        if (input % i === 0) {
            array.push(i);
            // divide input by every number less than input
            // reassign input
            input = input / i;
        }
    }
    
    // Get max value of array
    let max = array.reduce(function(a, b){
       let max = Math.max(a, b);
       return max;
    });
    
    
    console.log(max);
};

largestPrimeFactor(input);