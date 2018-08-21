const fs = require('fs');
const path = require('path')

const usersFilePath = path.join(__dirname, '../files/users.json')
const booksFilePath = path.join(__dirname, '../files/books.json')
const reviewsFilePath = path.join(__dirname, '../files/reviews.json')


const joiner = (cb) => {
    // You cannot use fs.readFileSync here
    // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    fs.readFile(usersFilePath, 'utf8',(err, usersJSON) => {
        if(err) throw new Error(err)
        fs.readFile(booksFilePath, 'utf8', (err, booksJSON) => {
            if(err) throw new Error(err)
            fs.readFile(reviewsFilePath, 'utf8', (err, reviewsJSON) => {
                if(err) throw new Error(err)
                
                const output = []
                
                const users = JSON.parse(usersJSON)
                const books = JSON.parse(booksJSON)
                const reviews = JSON.parse(reviewsJSON)
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
                cb(output);
            })

        })
    })
    
};

module.exports = joiner;