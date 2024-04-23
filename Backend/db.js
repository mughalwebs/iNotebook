const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/iNotebook';
const connectToMongos = () => {
    mongoose.connect(mongoURI).then(() => { console.log(40); })
}
module.exports = connectToMongos;