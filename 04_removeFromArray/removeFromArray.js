const removeFromArray = function(array, ...params) {
    var newArray = array.filter(item => !params.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
