const {
  deviceList,
  testTime
} = require('../constant/env');
const {
  rawData
} = require('../modules');
const {
  initConnect
} = require('./mqttConnector');
const topic = require('../constant/mqttTopic');

function publishData(frequency) {
  deviceList.forEach(device => {
    console.log("device info: ", device);
    let t = 1;
    const client = initConnect(device);

    const timeId = setInterval(() => {
      if ((t * frequency) >= testTime && testTime !== 0) {
        clearInterval(timeId);
        console.log('test end');
      }
      client.publish(topic, JSON.stringify(rawData()))
      console.log(`${device.name} connected`, t++);
      if (client.disconnected) clearInterval(timeId);
    }, frequency * 1000);
  });
}

module.exports = publishData;