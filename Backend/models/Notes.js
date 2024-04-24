const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ref'
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        unique: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const notesModel = mongoose.model("notes", notesSchema);
module.exports = notesModel;