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

3. Change `env.js` device list. If you have many device, device list format as follow.
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
```

4. run test 
```
node index.js
```