const palindromes = function (string) {
    let rWord = ''; // Reverse word initializer
    const regex = /[\W]/g; // Set regex criteria
    
    // clean the word before initiating the palindrome test
    let cleanedWord = string.replace(regex, '');
    cleanedWord = cleanedWord.toLowerCase();
    console.log(cleanedWord);

    // Test if palindrome
    for (let i = cleanedWord.length - 1; i >= 0; i--) {
        // console.log(string[i])
        rWord += cleanedWord[i];
    }
    return cleanedWord === rWord;
    // console.log(newWord);
};

// console.log(palindromes('hola'));

// Do not edit below this line
module.exports = palindromes;
