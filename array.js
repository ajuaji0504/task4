let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("The sum of the numbers in the array is:", sum);

function convertToTitleCaps(stringArray) {
    var titleCapsArray = stringArray.map(function(string) {
        return string.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    });
    return titleCapsArray;
}
var stringArray = ["hello world", "javascript programming", "title case example"];
var titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);

function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

const array = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(array));

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function getPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Prime numbers in array:", getPrimeNumbers(arr));