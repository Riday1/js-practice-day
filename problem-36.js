const years = [2023, 2024, 2025, 2028, 2030];

function checkLeapYear(years) {

    for (var i = 0; i < years.length; i++) {
        if (years[i] % 4 === 0 && years[i] % 100 !== 0) {
            console.log('Year is leapyear ', years[i]);
        }
        else if (years[i] % 400 === 0) {
            console.log('Year is leapyear', years[i]);
        }
        else {
            console.log('Year is notLeapYear', years[i]);
        }
    }
}
checkLeapYear(years)