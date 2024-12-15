const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: {type:String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true },
    mobile: {type: Number, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    submittedAt: {type: Date, default: Date.now},
});



module.exports = mongoose.model("Submission", formSchema, "submissions")