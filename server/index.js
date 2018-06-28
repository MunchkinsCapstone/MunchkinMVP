const app = require('express')()
const socketio = require('socket.io')


// io.on('connection', function (socket) {
//     socket.emit('news', () => console.log('hello world'));
//     console.log('socket has made a connection')
// })

const server = app.listen(8080, () => {
    console.log('Port listening at 8080')
})

const io = socketio(server)
// io.on('connection', socket => {
//     console.log(`A socket connection to the server has been made`)

//     socket.on('disconnect', () => {
//         console.log(`Connection ${socket.id} has left the building`)
//     })
// })
require('./socket')(io)

