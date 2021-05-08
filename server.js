const app = require("./app");
const socket = require('socket.io');
const cors = require('cors'); 

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5000
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

const campusRooms = ['Paris', 'Berlin', 'Sao Paulo', 'Mexico City']

// use io to listen for all incoming messages
io.on('connection', (socket) => {
  console.log('new connaction was made');
  console.log('socket id: ', socket.id); // object of socket connection made new on each connection
    
  // io.emit('message',{
  //     message: 'Welcome to IronChat!',
  //     username: 'the IronChat Team'
  //     })



  // 'new message' is the name of what is emitted in frontend App.js
  socket.on('new-message', data => {
    console.log(data.message, data.username, data.room);
    // io.emit('message', data)
    io.to(data.room).emit('message', data)
  })

  socket.on("leaveRoom", roomName => {
    socket.leave(roomName);
    console.log('leaving ' , roomName);
    // io.in(roomName).emit('message', {message: 'someone joined the room'})
    // return socket.emit("message", "You've joinged this room")
  })

  socket.on("joinRoom", roomName => {
    socket.join(roomName);
    console.log('joining ' , roomName);
    io.in(roomName).emit('message', {message: 'someone joined the room'})
    return socket.emit("message", "You've joinged this room")
  })

  // // making a room for specigic campuses, update url when we know 
  // io.of('/campus/:campusId').on('connection', socket => {
  //   io.emit('message',{
  //     message: 'Welcome to the campus room!',
  //     username: 'the IronChat Team'
  //     })
  // }) 

  socket.on('disconnect', () => {
    console.log('disconnected');
    // this is where we would remove a user from a room
  })
})