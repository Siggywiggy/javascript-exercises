const reverseString = function(string) {
    let maxIndex = string.length - 1;
    let result = "";
    for (maxIndex; maxIndex >= 0; --maxIndex){
        console.log(string.charAt(maxIndex));
        result += string.charAt(maxIndex);
    }
    return result;
};



// Do not edit below this line
module.exports = reverseString;
