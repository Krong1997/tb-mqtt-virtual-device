function randonNum(params) {
  return Math.random() * params;
}
function rawData() {
  return {
    "CPU": {
      "0": {
        "Freq": 1003,
        "Usage": 68.0,
        "Temp": 44,
        "V": 8
      },
      "1": {
        "Freq": 1387,
        "Usage": 89.0,
        "Temp": 43,
        "V": 10
      },
      "2": {
        "Freq": 1261,
        "Usage": 54.0,
        "Temp": 20,
        "V": 9
      },
      "3": {
        "Freq": 1366,
        "Usage": 16.0,
        "Temp": 24,
        "V": 8
      },
      "Freq": 2271,
      "Usage": 61.0,
      "FanRPM": 1971
    }
  };
}
function requestOpt(raw) {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw,
    redirect: 'follow'
  };
}

module.exports = {
  randonNum,
  rawData,
  requestOpt
}