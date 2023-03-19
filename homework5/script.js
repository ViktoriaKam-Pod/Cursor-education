//1
let array = Array.from([]);
function getRandomArray(length, min, max){
    for (let i = min; i <= length; i++) {
    array.push( Math.round (Math.random() * max))
}
    return array
}

console.log(getRandomArray(3, 1, 100))

//2

function getAverage(numbers) {
    return numbers.reduce((partialSum, a) => partialSum + a, 0) / numbers.length;
}
console.log(getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

//3

function getMedian(number) {
    number.sort((a, b) => a - b);
    if (number.length % 2) {
        return number[Math.floor(number.length / 2)];
    } else {
        return (number[number.length / 2] + number[number.length / 2 - 1]) / 2;
    }
}
console.log(getMedian([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]))

//4

function filterEvenNumbers(numbers){
    return numbers.filter((numberEven) => numberEven % 2 === 1)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

//5

function countPositiveNumbers(numbers){
    return (numbers.filter((count) =>  count > 0)).length
}
console.log(countPositiveNumbers([1, -2, 3, -4, -5, 6]))

//6


function getDividedByFive(numbers){
    return numbers.filter((number5) => number5 % 5 === 0)
}
console.log(getDividedByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]))

//7

