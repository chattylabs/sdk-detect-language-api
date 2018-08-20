const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const detect = require('@chattylabs/language-detection')

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const text = req.query.text
  const results = detect(text)
  if (results) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(results))
  } else {
    res.status(400).send({ message: 'could not detect text language' })
  }
})

exports.detect = functions.https.onRequest(app);
