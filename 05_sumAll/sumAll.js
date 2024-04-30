const sumAll = function(num1, num2) {
    let result = 0; 
    if (typeof num1 !== 'number' || num1 < 0 
        || typeof num2 !== 'number' || num2 < 0) {
        return 'ERROR';
    } else {
        if (num2 > num1) {
            for (var i = num1; i <= num2; i++) {
                result += i ;
            }
        } else {
            for (var i = num2; i <= num1; i++) {
                result += i ;
            }
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
