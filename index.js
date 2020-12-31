const {
  publish_frequency
} = require('./constant/env');
const publishData = require('./device/client');

publishData(publish_frequency);