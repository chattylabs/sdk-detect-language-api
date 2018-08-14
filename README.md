# sdk-detect-language-api

Open source API that detects the language of a given text.

## Training

We compile a collection of commonly used texts per language in `data/resources`.

Run the command `npm run train` from the root of the project to generate/update `data/languageProfiles.json` which is the source of comparison for the detection of languages.
