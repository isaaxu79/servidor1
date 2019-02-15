const express = require('express')
var aplicacion = express()
const os = require('os')
var interface = os.networkInterfaces()
const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} =  require('string_decoder')
const decoder = new StringDecoder('utf8')
var ipDimanic;
for(var k in interface){
  for(var k2 in interface[k]){
    var address = interface[k][k2]
    if(address.family = "IPv4" && !address.internal){
      ipDimanic = address.address.toString()
    }
  }
}

var HOST = "127.0.0.1"
var PORT = process.env.PORT || 5000;

  server.listen(PORT, function(){
      console.log('servidor activo ' + HOST + ':' + PORT)
  })

var ser = net.createServer(function(so){
    console.log('Usuario Nuevo ' + so.remoteAddress + ':' + so.remotePort)    
    so.on('data', function(data){
        console.log(decoder.write(data))
    })
    so.on('close', function(){
      
    })
})

ser.listen(PORT, HOST)
// var express = require('express')
// var app = express()
// const net = require('net')
// const server = require('http').Server(app)
// const socket = require('socket.io')(server)
// const {StringDecoder} = require('string_decoder')
// const os = require('os')

// const decoder = new StringDecoder('utf8')
// var interface = os.networkInterfaces();
// var ipdinamic
// for(var k in interface){
//     for(var k2 in interface[k]){
//         var address = interface [k][k2]
//         if(address.family=='IPv4' && !address.internal ){
//             ipdinamic= address.address.toString();
//             console.log(ipdinamic)
            
//         }
//     }
// }
// var HOST = ipdinamic
// var PORT = process.env.PORT || 5000;

// server.listen(PORT, function(){
//     console.log('Servidor ON en el port '+HOST+':'+PORT)
// })

// var ser = net.createServer(function(so){
//     // so.on('connect', function(){
//     //     console.log('Usuario Nuevo')
//     // })
//     console.log('Usuario Conectado'+ so.remoteAddress+":"+so.remotePort)
//     //console.log(so)
//     so.on('data', function(data){
//         console.log(data)
//         var a = data
//         console.log(decoder.write(a))
//     })
//     so.on('close',function(){
//         console.log('Usuario desconectado')
//     })
// })

// ser.listen(PORT,HOST)