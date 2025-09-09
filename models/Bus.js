// models/Bus.js
const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    routeNumber: {
        type: String,
        required: true
    },
    // This creates a link to a specific driver's document in the database
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    // --- THIS BLOCK IS ADDED ---
    currentLocation: {
        latitude: { type: Number },
        longitude: { type: Number }
    }
});

module.exports = mongoose.model('Bus', BusSchema);
