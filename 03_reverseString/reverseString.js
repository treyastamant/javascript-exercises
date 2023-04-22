const reverseString = function(string) {
    let rString = "";
    for (let i = string.length; i >= 0; i--) {
        rString += string.charAt(i);
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
