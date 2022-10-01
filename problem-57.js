

const num = 6;
let count = 0;
for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        count++;
    }
}

if (count !== 0) {
    console.log(num, 'is not a prime')
}
else {
    console.log(num, 'is  a prime')
}

