// websocketServer.js

const http = require('http');
const socketIo = require('socket.io');

// Create HTTP server
const server = http.createServer();

// Initialize socket.io
const io = socketIo(server, {
  // Options, if any
});

// Define WebSocket event handlers
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // Add more event handlers as needed
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
