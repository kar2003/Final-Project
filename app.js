const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const userRoutes = require('./Controller/userRoutes'); // Import user routes
const gameRoutes = require('./Controller/gameRoutes'); // Import game routes
const websocketServer = require('./websocketServer');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes); // Mount user routes
app.use('/api/games', gameRoutes); // Mount game routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} !!`);
});
