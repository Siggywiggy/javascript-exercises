const removeFromArray = function(inputArray, ...extras) {
    let result = new Array()

    if (inputArray === null || inputArray === undefined) {
        return undefined;
    } else if (extras.length === 0)  {
        return inputArray;
    }

    arrLength = inputArray.length

    for (let i = 0; i < arrLength; ++i) {
        let match = false;
        

        for (const arg of extras) {
            //console.log(` input ${inputArray[i]} - argument ${arg}`)
            if (inputArray[i] === arg) {
                match = true;
                console.log("match found!")
            }
        }


        if (match === false) {
            //console.log(`adding ${inputArray[i]}`)
            result.push(inputArray[i])
        } else {
            //console.log(`skipping  ${inputArray[i]}`)
        }
    }

    return result;

}

console.log(removeFromArray([1,2,3], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
