const priceOfMyBooks = [200, 300, 400, 100, 201, 600]
for (var i = 0; i < priceOfMyBooks.length; i++) {
    if (priceOfMyBooks[i] > 200) {
        continue;
    }
    console.log(priceOfMyBooks[i])
}