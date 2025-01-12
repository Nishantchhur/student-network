const { Server } = require("socket.io");

// This controller is more about handling messages through WebSockets, so Socket.IO handles message passing

module.exports = {
  sendMessage: (io, socket, message) => {
    io.emit("new_message", message);
  }
};
const sendMessage = (io, socket, roomId, message) => {
    io.to(roomId).emit("receive_message", message);
  };
  
  module.exports = { sendMessage };
  