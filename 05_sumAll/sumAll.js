const sumAll = function(num_1, num_2) {
    // check for negative number
    if (num_1 < 0 || num_2 < 0) {
        return "ERROR";
    // check for non-integers 
    } else if (!Number.isSafeInteger(num_1) ||!Number.isSafeInteger(num_2)){
        return "ERROR";
    // check for non-numbers like strings that cant be onverted to numbers
    } else if ((Number(num_1) === NaN) || (Number(num_2) === NaN)) {
        return "ERROR";
    //  check for non-numbers like arrays
    } else if ((typeof(num_1) !== "number") || (typeof(num_2) !== "number")){
        return "ERROR";
    }

    let result = new Number()
    let start = num_1;
    let end = num_2;

    if (num_1 < num_2) {
        for (let i = num_1; i <= num_2; i++) {
            result += i;
        }
    } else if (num_1 > num_2) {
        for (let i = num_2; i <= num_1; i++)  {
            result += i;
        }
    }
    
    return result
    
};

// Do not edit below this line
module.exports = sumAll;
