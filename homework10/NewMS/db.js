const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/new_MS_db", { useNewUrlParser: true, useUnifiedTopology: true })

var conn = mongoose.connection

conn.on("open", () => { console.log("MongoDB open"); });
conn.on("error", () => { console.log("MongoDB Error"); });
conn.on("disconnect", () => { console.log("MongoDB Disconnect"); });

var UserSchema = new mongoose.Schema({
    username: String,
    studentID: String,
    password: String,
    re_password: String,
    phonenumber: String,
    email: String
});

var User = mongoose.model("User", UserSchema);

exports.User = User;
exports.mongoose = mongoose;