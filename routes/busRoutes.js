// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// @route   POST /api/buses
// @desc    Register a new bus
router.post('/', async (req, res) => {
    try {
        const { registrationNumber, routeNumber } = req.body;

        // Check if bus already exists
        let bus = await Bus.findOne({ registrationNumber });
        if (bus) {
            return res.status(400).json({ msg: 'Bus already exists' });
        }

        // Create a new bus
        bus = new Bus({
            registrationNumber,
            routeNumber
        });

        await bus.save();
        res.status(201).json(bus);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// --- THIS BLOCK IS ADDED ---
// @route   GET /api/buses/:registrationNumber
// @desc    Get a single bus's details and location
router.get('/:registrationNumber', async (req, res) => {
    try {
        const bus = await Bus.findOne({ registrationNumber: req.params.registrationNumber });

        if (!bus) {
            return res.status(404).json({ msg: 'Bus not found' });
        }

        res.json(bus);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// --- END OF ADDED BLOCK ---

module.exports = router;
