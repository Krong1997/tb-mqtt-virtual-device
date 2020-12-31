const mqtt = require('mqtt')
const {
  host,
  port
} = require('../constant/env');
function initConnect(device) {
  const client = mqtt.connect(`mqtt://${host}:${port}`, {
    username: device.token
  });

  client.once("error", function (error) {
    console.log("Can't connect: " + error);
    client.end();
  });

  return client;
}

module.exports = {
  initConnect
}