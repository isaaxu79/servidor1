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
    if(address.family = "IPv6" && !address.internal){
      ipDimanic = address.address.toString()
    }
  }
}

//var HOST = "192.168.137.204"
var PORT = process.env.PORT || 5000;

  server.listen(PORT, function(){
      console.log('servidor activo ' + ipDimanic + ':' + PORT)
  })

var ser = net.createServer(function(so){
    console.log('Usuario Nuevo ' + so.remoteAddress + ':' + so.remotePort)    
    so.on('data', function(data){
        console.log(decoder.write(data))
    })
    so.on('close', function(){
      
    })
})

ser.listen(PORT, ipDimanic)