const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 9001});

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
  wsClient.on('message', function(message) {
    console.log('server received message', message);
    setTimeout(() => {
      wsClient.send(Buffer.from([0x01, 0x02, 0x03, 0x04]));
    }, 1000);
  });

  wsClient.on('close', function() {
    console.log('server connection closed');
  });

  wsClient.on('error', function(err) {
    console.log('server connection failed', err);
  });
}
