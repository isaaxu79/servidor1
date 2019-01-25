//const express = require('express')
// var aplicacion = express()

// const net = require('net')
// const server = require('http').Server(aplicacion)
// const socket = require('socket.io')(server)
// const {StringDecoder} =  require('string_decoder')
// const decoder = new StringDecoder('utf8')

// var HOST = "https://server1ser1.herokuapp.com/"
// var PORT = 3000

//   server.listen(PORT, function(){
//       console.log('servidor activo ' + HOST + ':' + PORT)
//   })

// var ser = net.createServer(function(so){
//     console.log('Usuario Nuevo ' + so.remoteAddress + ':' + so.remotePort)    
//     so.on('data', function(data){
//         console.log(decoder.write(data))
//     })
//     so.on('close', function(){
      
//     })
// })

// ser.listen(PORT, HOST)
const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});