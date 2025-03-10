const path = require('path');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
dotenv.config()

// Load environment variables from .env file
const mongoURI = process.env.MONGO_ATLAS
const connectMongoDBatlas = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Atlas Connected...');
        
        
    } catch (error) {
        console.error(`Error connecting to MongoDB Atlas: ${error.message}`);
        process.exit(1);
    
    }
}

module.exports = connectMongoDBatlas;