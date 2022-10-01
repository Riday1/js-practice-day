const array = [2, 4, 5, 6, 7, 8, 1, 10]
let smallestNumber = array[0];
for (var i = 1; i < array.length; i++) {
    if (smallestNumber > array[i]) {
        smallestNumber = array[i]
    }
}
console.log(smallestNumber)