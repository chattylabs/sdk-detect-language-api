const detect = require('@chattylabs/language-detection')

module.exports = app => {
  app.get('/detect', (req, res) => {
    const text = req.params.text
    const results = detect(text)
    if (results) {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify(results))
    } else {
      res.status(400).send({ message: 'could not detect text language' })
    }
  })
}
