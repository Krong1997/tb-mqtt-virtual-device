## How to use

1. install package
    ```
    npm i
    ```

2. create .env file as follow
    ```
    HOST=${HOST}
    PORT=${PORT}
    PUBLISH_FREQUENCY=${SECONDS}
    TEST_TIME={TEST_TIME}
    ```

3. There are two ways as follow:

    **method A**

    Create `deviceList.json` file in `device` folder. 

    Add your device array as follow.
    ```json
    [
      {
        "name": "name",
        "token": "token"
      },
      {
        "name": "name2",
        "token": "token2"
      }
    ]

    module.exports = deviceList;
    ```

    **method B**

    Use https://github.com/Krong1997/Set-device-to-TB to generate device list json file, and copy that to `device` folder.

4. run test 
    ```
    node index.js
    ```