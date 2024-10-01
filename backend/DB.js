const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name: String,
    password : String,
    phone: {type: Number, unique:true},
    email: {type: String, unique: true},
   
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