const removeFromArray = function(array, ...args) {
    for (let element of args) {
        let x = array.indexOf(element);
        if (x !== -1) array.splice(x, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
