
const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true, 
            minlength: 3,
            maxlength: 12
        },
        autor: {
            type: String, 
            required: true, 
            minlength: 3,
            maxlength: 12, 
        },
        caption: {
            type: String,
            maxlength: 200,
        },
        thumbnail: {
            type: String,
            maxlength: 24,
        },
        pages: [
            {type: String}
        ]
    }, {
        timestamps: true,
    }
);

const mangaModel = mongoose.model("Manga", mangaSchema)

module.exports = mangaModel