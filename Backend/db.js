// import mongoose package and initializing mongoURI
const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://iNotebook_CURD_of_Notes:$iNotebook.786$@inotebook.nu3ietb.mongodb.net/iNotebook';
// The following function connects backend to MongoDB (database)
const connectToMongos = () => {
    mongoose.connect(mongoURI)
    // If the data base is successfully connected to database then following line is executed
    .then(() => { console.log(200 + " OK"); })
    // If the data base is not connected to database (because of any error) then following line is executed
    .catch(() => { console.log(400 + "Error in db.js"); })
}
// export connectToMongos (function connects backend to MongoDB (database))
module.exports = connectToMongos;