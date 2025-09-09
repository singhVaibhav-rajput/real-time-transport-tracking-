// server.js
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require("socket.io");
const connectDB = require('./config/db');
const Bus = require('./models/Bus');

// --- THIS LINE IS ADDED ---
let waitingPassengers = [];

connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", // Allow connections from any origin (your frontend)
    }
});

app.use(express.json());

// Add a route to serve the test.html file
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Define API Routes
app.use('/api/drivers', require('./routes/driverRoutes'));
app.use('/api/buses', require('./routes/busRoutes'));

const PORT = 3001;

// --- Real-time connection logic ---
io.on('connection', (socket) => {
    console.log(`✅ New client connected: ${socket.id}`);

    socket.on('joinBusRoom', (busId) => {
        socket.join(busId);
        console.log(`Client ${socket.id} joined room: ${busId}`);
    });

    // --- THIS BLOCK IS NEW ---
    // A passenger tells the server they are waiting at a stop
    socket.on('imWaitingAtStop', (data) => {
        // data = { busId: '...', stop: { latitude: ..., longitude: ... } }
        waitingPassengers.push({
            id: socket.id,
            busId: data.busId,
            stop: data.stop
        });
        console.log(`Passenger ${socket.id} is waiting for bus ${data.busId} at their stop.`);
    });
    // --- END OF NEW BLOCK ---

    socket.on('updateLocation', async (data) => {
        console.log('Location update received:', data);
        
        try {
            await Bus.findOneAndUpdate(
                { registrationNumber: data.busId },
                { currentLocation: { latitude: data.latitude, longitude: data.longitude } }
            );
        } catch (err) {
            console.error('Error updating bus location in DB:', err);
        }

        // --- THIS BLOCK IS NEW ---
        // Check for nearby passengers and notify them
        waitingPassengers.forEach((passenger, index) => {
            if (passenger.busId === data.busId) {
                const distance = calculateDistance(
                    data.latitude, data.longitude,
                    passenger.stop.latitude, passenger.stop.longitude
                );

                // If bus is within 200 meters, notify the passenger
                if (distance < 0.2) { // distance is in km
                    io.to(passenger.id).emit('busArriving', { msg: 'Your bus is arriving now!' });
                    console.log(`Notified passenger ${passenger.id} that their bus is arriving.`);
                    // Remove passenger from list after notifying them
                    waitingPassengers.splice(index, 1);
                }
            }
        });
        // --- END OF NEW BLOCK ---

        io.to(data.busId).emit('locationUpdate', data);
    });

    socket.on('disconnect', () => {
        console.log(`❌ Client disconnected: ${socket.id}`);
        // Optional: remove passenger from waiting list if they disconnect
        waitingPassengers = waitingPassengers.filter(p => p.id !== socket.id);
    });
});

// --- THIS HELPER FUNCTION IS NEW ---
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Returns distance in km
}

// We change app.listen to server.listen
server.listen(PORT, () => {
    console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});
