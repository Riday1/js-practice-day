

const array = [10, 20, 30, 40, 50];

function avg(array) {
    let avg = 0;
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    avg = sum / array.length;
    return avg;
}

const average = avg(array);
console.log(average)