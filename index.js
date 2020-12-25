const {
  publish_frequency
} = require('./env');
const postData = require('./client');
postData(publish_frequency);