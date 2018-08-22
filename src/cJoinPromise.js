const fs = require('fs');
const path = require('path')
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const usersFilePath = path.join(__dirname, '../files/users.json')
const booksFilePath = path.join(__dirname, '../files/books.json')
const reviewsFilePath = path.join(__dirname, '../files/reviews.json')

const joiner = () => {
    // You cannot use fs.readFileSync here
    // Use https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
    // and return "a promise to join the files"
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    
    Promise.all(
        [readFileAsync(reviewsFilePath), readFileAsync(usersFilePath), readFileAsync(booksFilePath)])
    .then((data) => {
        console.log("XXX: " + data)

        
    })

    return Promise.resolve([]);
}

module.exports = joiner;