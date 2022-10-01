
function paperRequirements(firstBookCopys, secondBookCopys, thirdBookCopys) {
    const paperForFirstBook = firstBookCopys * 100;
    const paperForSecondBook = secondBookCopys * 200;
    const paperForThirdBook = thirdBookCopys * 300;
    return paperForFirstBook + paperForSecondBook + paperForThirdBook;

}

const result = paperRequirements(2, 3, 4);
console.log(result)