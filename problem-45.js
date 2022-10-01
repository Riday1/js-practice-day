

function farenheightToCelcius(farenheight) {

    let celcius = ((farenheight - 32) * 5) / 9;
    celcius = parseFloat(celcius.toFixed(2))

    return celcius;
}

const celcius = farenheightToCelcius(44);
console.log(celcius)