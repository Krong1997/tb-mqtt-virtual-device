function randonNum(params) {
  return Math.random() * params;
}
function rawData() {
  return {
    "CPU.Usage": randonNum(100)
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