
function areaOfaTriangle(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;

    let area1 = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
    area1 = parseFloat(area1.toFixed(2))
    return area1;


}

const area = areaOfaTriangle(20, 20, 6)
console.log(area)

