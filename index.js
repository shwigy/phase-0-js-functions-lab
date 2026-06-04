




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// function to calculate tax
function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}
console.log(calculateTax(100)); // should print 10

// function to convert string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world")); // should print "HELLO WORLD"

// function to find the maximum of two numbers
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(findMaximum(1, 2)); // should print 2

// function to check if a string is a palindrome
function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome("racecar")); // should print true
console.log(isPalindrome("hello")); // should print false

// function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}
console.log(calculateDiscountedPrice(100, 20)); // should print 80
