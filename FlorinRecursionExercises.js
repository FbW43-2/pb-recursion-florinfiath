'use strict';

/* 

December 15, 2020
Practice recursion in JavaScript 
Implement the following exercises in separated functions in both iterative (e.g., loops) and recursive functions, and add a comment for each line of your code

1. Calculate the sum of the natural number up to n. For example:  sum(n) = 1+2+3+...+n 
2. Calculate the value of n to the m power   
3. Find the nth Fibonacci number, e.g.,  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
4. Print the integers in range (x, y). Example : range(2, 10) Expected Output  = > 2,3, 4, 5, 6, 7, 8, 9 , 10 

*/


//1 .Calculate the sum of the natural number up to n. For example:  sum(n) = 1+2+3+...+n 

// 1.1 Iterative way
function sumOfNaturalNumbers(n) {
    let total = 0;
    for (var i=0; i <= n; i++){
        total += i;
    }
    return total;
}
console.log("1.1 Sum of Natural Numbers with Iterative solution")
console.log(sumOfNaturalNumbers(8));


// 1.2 Recursive way
function sumOfNaturalNum(num){
    if (num === 0){
        return 0;
    }
    else return num + sumOfNaturalNum(--num)
}
console.log("1.2 Sum of Natural Numbers with Recursive solution");
console.log(sumOfNaturalNum(8));

// 2. Calculate the value of n to the m power

console.log("2. Calculate the value of n to the m power");
console.log(Math.pow(2, 3));

// 3.Finonacci number
//_3.1 First solution

function fibonacci(num) {
    let x = 1, y= 0, temp;
    while (num >=0){
        temp = x;
        x = x + y;
        y = temp ;
        num--;
    }
    return y;
}
console.log("3.Finonacci number")
console.log(fibonacci(6));


//.4. Print the integers in range (x, y). Example : range(2, 10) Expected Output  = > 2,3, 4, 5, 6, 7, 8, 9 , 10    

function range (x,y) {
    var results = [];
    if (x === y){
        return results;
    }
    results.push(x);
    return results.concat(range(x+1,y));
}
console.log(".4 Range Of x and y");
console.log(range(2,10));