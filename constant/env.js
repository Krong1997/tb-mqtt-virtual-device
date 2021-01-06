require('dotenv').config();

module.exports = {
  deviceList: require('../device/deviceList'),
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || "1883",
  publish_frequency: process.env.PUBLISH_FREQUENCY || "10",
  testTime: process.env.TEST_TIME || 0
}