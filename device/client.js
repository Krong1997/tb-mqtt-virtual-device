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

const timeArr = [];

function publishData(frequency) {
  deviceList.forEach((device, idx) => {
    console.log("device info: ", device);
    timeArr[idx] = 0;
    const client = initConnect(device);

    const timeId = setInterval(() => {
      if ((timeArr[idx] * frequency) >= testTime && +testTime !== 0) {
        clearInterval(timeId);
        console.log('test end');
      }
      client.publish(topic, JSON.stringify(rawData()))
      console.log(`${device.name} connected`, timeArr[idx] += 1);
      if (client.disconnected) clearInterval(timeId);
      if (idx === timeArr.length - 1) console.log('total', timeArr.reduce((accu, curr) => accu + curr));
    }, frequency * 1000);
  });
}

module.exports = publishData;