const io = require( "socket.io" )();
const socketapi = {
    io: io
};

let socketsConnected = new Set()


io.on("connection", onConnected)  

function onConnected(socket){
    console.log(socket.id);
    socketsConnected.add(socket.id)
   
    io.emit('clients-total', socketsConnected.size)

    socket.on('disconnect', () => {
        console.log('Socket disconnected', socket.id);
        socketsConnected.delete(socket.id)

        io.emit('clients-total', socketsConnected.size)
    })

    socket.on('message', (data) =>{
        console.log(data);
        socket.broadcast.emit('chat-message', data)
    })
}



// Add your socket.io logic here!
// io.on( "connection", function( socket ) {
//     socket.on( "disconnection", function( data ) {
//         console.log(data);
//         console.log("disconnected to user ! ");
//     });
//     console.log("conected to user ! ");
// });
// end of socket.io logic

module.exports = socketapi;