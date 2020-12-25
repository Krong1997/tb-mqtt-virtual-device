const mqtt = require('mqtt')
const {
  host,
  port,
  deviceList
} = require('./env');
const {
  rawData
} = require('./modules');
const topic = "v1/devices/me/telemetry";

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

function postData(time) {
  deviceList.forEach(device => {
    console.log(device);
    let t = 0;
    const client = initConnect(device);

    const timeId = setInterval(() => {
      const payload = rawData();

      client.publish(topic, JSON.stringify(payload))
      console.log(`${device.name} connected`, t++);
      if (client.disconnected) clearInterval(timeId);
    }, time * 1000);
  });
}

module.exports = postData;