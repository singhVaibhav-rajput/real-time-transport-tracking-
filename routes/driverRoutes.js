// routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver'); // Go up one level to find the models folder

// @route   POST /api/drivers
// @desc    Register a new driver
router.post('/', async (req, res) => {
    try {
        // Get the name and licenseNumber from the request body
        const { name, licenseNumber } = req.body;

        // Check if a driver with this license already exists
        let driver = await Driver.findOne({ licenseNumber });
        if (driver) {
            return res.status(400).json({ msg: 'Driver with this license already exists' });
        }

        // If not, create a new driver
        driver = new Driver({
            name,
            licenseNumber
        });

        // Save the driver to the database
        await driver.save();

        // Respond with the newly created driver's data
        res.status(201).json(driver);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;