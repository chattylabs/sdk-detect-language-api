# sdk-detect-language-api

Chatty API to detect the language of our users.

## Training

We compile a collection of commonly used texts per language in `data/resources`.

Run the command `npm run train` from the root of the project to generate/update `data/languageProfiles.json` which is the source of comparison for the detection of languages.
