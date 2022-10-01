const array = [2, 4, 5, 16, 7, 8, 1, 10];
let firstLargest = 0;
let secondLargetst = 0;
for (var i = 1; i < array.length; i++) {
    if (firstLargest < array[i]) {
        secondLargetst = firstLargest;
        firstLargest = array[i]
    }
    else if (secondLargetst < array[i]) {
        secondLargetst = array[i]
    }
}
console.log(firstLargest)
console.log(secondLargetst)