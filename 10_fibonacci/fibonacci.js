const fibonacci = function(num) {
// initialize array
let arr = [0,1];

// run a for loop based on the size of the num prompted
for (i = 2; i <= num; i++) {
    arr[i] = arr[i-2] + arr[i-1];
}

// return the value of the number
// console.log(arr);
const output = num >= 0 ? arr[num] : 'OOPS';
console.log(output);
return output;
};

// Do not edit below this line
module.exports = fibonacci;
