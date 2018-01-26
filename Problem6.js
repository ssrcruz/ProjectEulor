
let num = 100;

let sumSquareDifference = (num) => {
    
    // Take sum of all the squared numbers between 1 and 100
    let sumOfTheSquare = () => {
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            let squaredNum = i * i;
            sum += squaredNum;
        }
        return sum;
    };
    
    // Take the sum of all the numbers between 1 and 100 and square it
    let squareOfTheSum = () => {
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            sum += i; 
        }
        
        let squaredSum = sum * sum;
        
        return squaredSum;
    };
    
    let difference = squareOfTheSum() - sumOfTheSquare();
    
    return difference;
};

console.log(sumSquareDifference(num));
