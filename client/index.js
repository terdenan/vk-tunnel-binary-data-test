const WebSocket = require('ws');

const ws = new WebSocket('http://user145458606-cliecjjw.wormhole.vk-apps.com:8081');

ws.on('error', function(err) {
  console.log('client connection failed', err);
});

ws.on('open', function open() {
  console.log('client connection opened');
  ws.send(Buffer.from([0x01, 0x02, 0x03, 0x04]));
});

ws.on('message', function(message) {
  console.log('client received message', message);
  setTimeout(() => {
    ws.send(Buffer.from([0x01, 0x02, 0x03, 0x04]));
  }, 1000);
});

ws.on('close', function() {
  console.log('client connection closed');
});
