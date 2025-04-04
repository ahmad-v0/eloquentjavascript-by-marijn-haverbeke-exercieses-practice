/*
Recursion

We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by 
using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive 
whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept 
a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

/*
// version-01:
let numType = "";
function isEven(n) {
    if (n === 0) {
        numType = "even";
    } else if (n === 1) {
        numType = "odd";
    } else {
        n -= 2;
        isEven(n);
    }
    return numType;
    
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
*/

// version-02: 
function isEven(n) {
    if (n === 0) return true; 
    else if (n === 1) return false;
    else if (n < 0) return isEven(-n);  // convert the negative into positive to handle stack size exceeded error
    else return isEven(n-2);            // call return when invoking recursive action 
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
