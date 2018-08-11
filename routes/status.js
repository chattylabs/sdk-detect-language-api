const detect = require('@danielantelo/language-detector')
const pjson = require('../package.json')

module.exports = app => {
  app.get('/status', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(
      JSON.stringify({
        status: 'OK',
        version: pjson.version,
      })
    )
  })
}
