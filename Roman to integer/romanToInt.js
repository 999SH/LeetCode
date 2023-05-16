/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let sum = 0
    for (let i = 0; i < s.length-1; i++) {
        if (romanNumerals[s[i]] >= romanNumerals[s[i+1]]){
            sum += romanNumerals[s[i]]
        }
        else {
            sum -= romanNumerals[s[i]]
        }
    }
    sum += romanNumerals[s[s.length-1]]
    return sum
};

const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

console.log(romanToInt("LVIII"))