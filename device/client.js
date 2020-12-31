const {
  deviceList
} = require('../constant/env');
const {
  rawData
} = require('../modules');
const {
  initConnect
} = require('./mqttConnector');
const topic = require('../constant/mqttTopic');

function publishData(time) {
  deviceList.forEach(device => {
    console.log("device info: ", device);
    let t = 0;
    const client = initConnect(device);

    const timeId = setInterval(() => {
      client.publish(topic, JSON.stringify(rawData()))
      console.log(`${device.name} connected`, t++);
      if (client.disconnected) clearInterval(timeId);
    }, time * 1000);
  });
}

module.exports = publishData;