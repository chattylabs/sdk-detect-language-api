# sdk-detect-language-api

Open source API that detects the language of a given text.

## Usage

### Running the api server

`npm start` will launch the server on port 3000, to run it on any other port use `PORT=8080 npm start`

### Detect

Once the server is up and running you can use a GET on `/detect` route with the parameter `text` set to the text you want to detect the language of.

Node example:

```
const request = require("request")
const endpoint = "https://api.example.com/detect"
const params = {
  text: 'hello world'
}
request.get({ url: endpoint, qs: params }, (err, response, body) => {
    console.log(body);
})
```
