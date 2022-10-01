

function leapYear() {
    const year = 2023;
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year, 'is leapYear')
    }
    else if (year % 400 === 0) {
        console.log(year, 'is leapYear');
    }
    else {
        console.log(year, 'is  not  leapYear ')
    }
}

leapYear()