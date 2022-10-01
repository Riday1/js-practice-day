const array = [5, 7, 8, 10, 45, 30]
function findOddSum(array) {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum = sum + array[i]
        }
    }
    return sum;
}

console.log(findOddSum(array));