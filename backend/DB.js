const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: String,
    phone: {type: Number, unique:true},
    email: {type: String, unique: true},
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
})
const BookSchema = mongoose.Schema({
    bookTitle: String,
    author : String,
    genre : String,
    yop : String,
    isbn: String
})

const User = mongoose.model("User", UserSchema)
const Book = mongoose.model("Book", BookSchema)

module.exports = {
    User,
    Book
}