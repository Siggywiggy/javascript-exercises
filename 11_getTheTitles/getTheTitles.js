const getTheTitles = function(books) {
    let bookTitles = new Array()
    for (const book of books) {
        bookTitles.push(book.title)
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
