const reverseString = function(str) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        output += str[(str.length - 1) - i]; //str[str.length - i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
