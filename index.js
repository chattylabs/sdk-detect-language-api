const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api.js')
const status = require('./routes/status.js')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

status(app)
api(app)

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('api running on port.', server.address().port)
})
