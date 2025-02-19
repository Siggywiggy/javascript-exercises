const palindromes = function (inputString) {
    // strip the string of all punctiation
    newString = (inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, "")).toLowerCase();
    console.log(newString)
    console.log(newString.length)
    // establish two pointers on each end of the string
    l_index = 0;
    r_index = newString.length - 1;
    // run a loop to move both pointers one step inwards per loop rotation 
    while (l_index <= r_index) {
        // check if the characters are the same on pointers
        if (newString.charAt(l_index) === newString.charAt(r_index)) {
            l_index++; // increment left index
            r_index--; // decrement right index
            //continue;
        // if the characters dont match return false
        } else {
            console.log(`${newString.charAt(l_index)} - ${newString.charAt(r_index)}`)
            return false;
        }
    } 
    //console.log("palindrome check passed!")
    return true;
};

//palindromes('bAnimal loots foliated detail of stool lamina.b')
// Do not edit below this line
module.exports = palindromes;
