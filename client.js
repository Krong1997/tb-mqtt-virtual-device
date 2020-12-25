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

function postData(time) {
  deviceList.forEach(device => {
    console.log(device);
    let t = 0;
    const client = mqtt.connect(`mqtt://${host}:${port}`, {
      username: device.token
    });

    const timeId = setInterval(() => {
      const payload = rawData();

      client.publish(topic, JSON.stringify(payload));
      console.log(`${device.name} connected`, t++);

      client.on("error", function (error) {
        console.log("Can't connect: " + error);
        clearTimeout(timeId);
        client.end();
      })
    }, time * 1000);
  });
}

module.exports = postData;