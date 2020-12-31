## How to use

1. install package
```
npm i
```

2. create .env file as follow
```
HOST=${server host}
PORT=${server port}
PUBLISH_FREQUENCY=${time-s}
```

3. Create `deviceList.js` file in `device` folder. Add your device array as follow.
```js
const deviceList = [
  {
    name: "name",
    token: "token"
  },
  {
    name: "name2",
    token: "token2"
  }
  ...
]

module.exports = deviceList;
```

4. run test 
```
node index.js
```