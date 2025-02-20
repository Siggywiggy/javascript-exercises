const fibonacci = function(count) {
    // check if input is string and if so parse it as a full integer
    if (Number(count) === NaN) {
        return "OOPS";
    } else {
        count = parseInt(count);
    }
    // check if the nth asked fib number is negative or 0
    if (count < 0) {
        return "OOPS";
    } else if (count === 0) {
        return 0;
    }

    // declare first two fibonacci numbers: 1 and 1

    let first = 1;
    let second = 1;

    // because first 2 fib numbers are already declared, our loop must
    // run to count -2
    for (let i = 1; i < count; i++) {
        [second, first] = [second + first, second]; // array destructuring
    }
    return first;
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
