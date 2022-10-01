
function chekcYourGread(yourMarks) {
    if (yourMarks >= 80) {
        console.log('Your Grade is : A+')
    }
    else if (yourMarks >= 70) {
        console.log('Your Grade is : A')
    }
    else if (yourMarks >= 60) {
        console.log('Your Grade is : A-')
    }
    else if (yourMarks >= 50) {
        console.log('Your Grade is : B')
    }
    else if (yourMarks >= 40) {
        console.log('Your Grade is : C')
    }
    else {
        console.log('Your Grade is : F')
    }
}

chekcYourGread(46)