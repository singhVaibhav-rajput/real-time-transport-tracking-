// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Your connection string with the correct username and password
        const MONGO_URI = 'mongodb+srv://swasthyalink:oQ7z2pesWOuXMsDI@cluster0.7sycjov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully! 💾');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;