const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema({

    title: {
        type: String,
        require: true

    },

    author: {
        type: Array,
        require: true

    },

    description: {
        type: String,
        require: true

    },

    src: String
})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book
