const fs = require('fs');
const path = require('path')

const usersFilePath = path.join(__dirname, '../files/users.json')
const booksFilePath = path.join(__dirname, '../files/books.json')
const reviewsFilePath = path.join(__dirname, '../files/reviews.json')

const joiner = () => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    const books = JSON.parse(fs.readFileSync(booksFilePath));
    const reviews = JSON.parse(fs.readFileSync(reviewsFilePath));
    const output = [];

    for(let review of reviews) {
        for(let book of books) {
            if(book.id !== review.bookId) {
                continue;
            }
            for(let user of users) {
                if(user.id !== review.userId) {
                    continue;
                }
                const joined = {
                    "name": user.firstName,
                    "book": book.title,
                    "rating": review.stars,
                    "review": review.text
                }
                output.push(joined);
            }
        }
    }

    return output;
}

module.exports = joiner;