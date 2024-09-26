const fibonacci = function(n) {
    n = parseInt(n);

    // Handle edge cases
    if (n < 0) {
        return "OOPS"; // Return "OOPS" for negative inputs
    }
    
    if (n === 0) return 0; // 0th Fibonacci number is 0
    if (n === 1 || n === 2) return 1; // 1st and 2nd Fibonacci numbers are 1

    let prev = 1, curr = 1;
    for (let i = 3; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
