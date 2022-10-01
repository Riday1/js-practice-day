const array = [10, 20, 30, 40, 50];

function avg(array) {

    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    let avg = sum / array.length;
    return avg;

}

const averageOfArrayElements = avg(array);
console.log(averageOfArrayElements)