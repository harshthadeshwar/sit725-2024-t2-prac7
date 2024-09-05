// Connect to the Socket.io server
let socket = io();

socket.on('connect', () => {
    console.log('Connected to the server');
});

socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});
