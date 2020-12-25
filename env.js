require('dotenv').config();
const deviceList = [
  {
    name: "name",
    token: "token"
  }
]

module.exports = {
  deviceList,
  host: process.env.HOST,
  port: process.env.PORT,
  publish_frequency: process.env.PUBLISH_FREQUENCY
}