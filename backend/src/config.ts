const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/Login");

//  check databse connected
connect.then(() => {
    console.log("Connected correctly to server");
})
.catch(() => {
    console.log("error");
});

// create a schema
const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

// create a model
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;