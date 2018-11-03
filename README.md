![McHacks logo](https://raw.githubusercontent.com/hackmcgill/mchacks6/master/src/static/mchacks.png?s=200)

[![Travis CI Build](https://api.travis-ci.com/hackmcgill/mchacks6.svg?branch=master)](https://travis-ci.com/hackmcgill/mchacks6)

This is the repository for the static landing page for [McHacks 6](https://www.mchacks.ca). Code based upon [boilerplate here](https://github.com/erickzhao/static-html-webpack-boilerplate).

## Setup
1. Make sure you have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) installed.
2. Run `yarn`.

## Folder structure
```
📁dist        -- contains production-ready code
📁src         -- source code folder
|--📁js       -- script files
|--📁static   -- static assets (images, fonts, etc.)
|--📁style    -- SCSS style sheets
...
```
## Available scripts
* `yarn build`: Builds `/src` into `/dist`. Minifies, transpiles, etc.
* `yarn start`: Runs a build, then starts the production server from the `/dist` folder on `localhost:8080`.
* `yarn start:dev`: Starts the development server at `localhost:9000`.
* `yarn lint:html`: Lint stylesheets with stylelint.
* `yarn lint:js`: Lint scripts with ESLint.
* `yarn lint:styles`: Lint stylesheets for a11y issues.

## Deployment

Our Continuous Integration is set up to automatically deploy a production build to the `gh-pages` branch upon any successful merge to `master`. (N.B. The `master` branch is protected, so any new changes must pass through a PR.)
