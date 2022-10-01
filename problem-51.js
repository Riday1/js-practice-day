const array = [10, 30, 4, 24, 5, 0, -1, 3];
let smallestNumber = 0;
for (var i = 0; i < array.length; i++) {
    if (smallestNumber > array[i]) {
        smallestNumber = array[i]
    }
}
console.log(smallestNumber)