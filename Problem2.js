var num = 4000000;

var evenFibonacciNumbers = (num) => {
   // initialize array 
   let array = [];
   
   let sum = 0;
   
   // For every number less than num
   for (let i = 0; i <= num; i++) {
       // Starting numbers are 1 and 2, so add them to array
       if (i === 1 || i === 2) array.push(i);
       if (i > 2) {
           // Grab last two numbers of the array and sum them
           let addLastNums = array[array.length - 1] + array[array.length - 2];
           // add sum of last two digits into array
           array.push(addLastNums);  
       }
   }

   // Add up all even numbers in array
   // If the sum exceeds 4 million, stop the program
   for (let k = 0; k <= array.length; k++) {
       if (array[k] % 2 === 0) {
           console.log(array[k] + " is even");
           if (sum > 4000000) break;
           sum += array[k];
       }
   }
   
   console.log(sum);
};

evenFibonacciNumbers(num);