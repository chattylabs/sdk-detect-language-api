const detect = require('l10n-language-detection')
const customLanguageProfiles = require('../data/languageProfiles.json')
const customReducers = require('../utils/reducers')

module.exports = app => {
  app.get('/detect/:text', (req, res) => {
    const text = req.params.text
    const results = detect(text, {
      languageProfiles: customLanguageProfiles,
      reducers: customReducers
    })
    if (results) {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify(results))
    } else {
      res.status(400).send({ message: 'could not detect text language' })
    }
  })
}
