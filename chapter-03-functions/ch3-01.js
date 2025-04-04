/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can write a function like that ourselves now. Define the function min that takes two arguments 
and returns their minimum.
*/

function min(a, b){
    if(a > b) {
        return b;
    } else return a;
}

console.log(min(0, -10));