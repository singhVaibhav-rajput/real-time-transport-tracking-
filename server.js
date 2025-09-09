// server.js
const express = require('express');
const connectDB = require('./config/db'); // This line is added

// Connect to the database
connectDB(); // This line is added

const app = express();

// Define the port number our server will run on
const PORT = 3001;

// Create a basic route for the homepage
// This tells the server what to do when someone visits it
app.get('/', (req, res) => {
    res.send('The server is running! Welcome to your backend.');
});

// Start the server and make it listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});