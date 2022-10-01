const numbers = [10, 20, 30, 40];

function make_average(array, length) {
    let sum = 0;
    for (var i = 0; i < length; i++) {
        sum = sum + array[i];
    }
    let average = sum / length;
    return average;
}

const average = make_average(numbers, 4)
console.log(average)