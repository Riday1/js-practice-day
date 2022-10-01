const numbers = [30, 50, 0, 99, 21, 45, - 3, 100, -30]
const positiveArray = []
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break;
    }
    positiveArray.push(numbers[i])
}

console.log(positiveArray)