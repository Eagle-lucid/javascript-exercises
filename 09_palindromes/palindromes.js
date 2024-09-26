const palindromes = function (str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Step 3: Compare the cleaned string with its reversed version
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
