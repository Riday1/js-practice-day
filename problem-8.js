const num1 = 10;
const num2 = 50;
const num3 = 30;
if (num1 > num2) {
    if (num1 > num3) {
        console.log('largest number is ', num1)
    }
    else {
        console.log('Largest number is ', num3)
    }

}
else {
    if (num2 > num3) {
        console.log('Largest number is ', num2);
    }
    else {
        console.log('Largest number is ', num3)
    }
}