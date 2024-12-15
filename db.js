const mongoose = require ('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected successfully"))
        .catch(err => console.error("Database connection failed", err));
        console.log('MongoDB Connected Successfully');
    }
    catch (err) {
        console.error('MongoDB Connection failed', err.message);
        process.exit(1)
    }
}

module.exports = connectDB