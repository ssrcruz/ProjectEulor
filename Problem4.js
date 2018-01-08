// Find the largest palindrome made from the product of two 3-digit numbers.

let largestPalindrome = () => {
    
    // array with numbers 100 through 999
    let array = [];
    
    // array with all palindrome numbers
    let palindrome = [];
    
    // Add all numbers between 100 and 999 into an array
    for (let i = 100; i >= 100 && i <= 999; i++) {
       array.push(i); 
    }
    
    // iterate through all numbers in array
    for (let k = 0; k <= array.length; k++) {
        // multiply each number by every number in array 
        for (let a = 0; a <= array.length; a++) {
            let sum = array[k] * array[array.length - a];
            // Convert sum to string and reverse then convert back to number
            let reversedNum = Number(String(sum).split('').reverse().join(''));
            // Check if palindrome, if so, add to palindrome array
            if (sum === reversedNum) {                
                palindrome.push(sum);
            }
        };
        

    }
    
    // get the largest number in palindrome array
    let getLargestNum = palindrome.reduce(function(a, b){
       let max = Math.max(a, b);
       return max; 
    });
    
    console.log(getLargestNum);  
};

largestPalindrome(input);