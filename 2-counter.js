// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Solution
function counter(n) {
    return function() {
        return n++;
    }
};

const myCounter = counter(1);
console.log(myCounter()); // Output 1
console.log(myCounter()); // Output 2;