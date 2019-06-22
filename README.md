![McHacks logo](https://raw.githubusercontent.com/hackmcgill/mchacks6/master/src/static/mchacks.png?s=200)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8bad70c-dd5e-4c44-85d3-0bc059b9737e/deploy-status)](https://app.netlify.com/sites/mchacks6/deploys)

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

We are using Netlify to compile and host our code automatically. When a PR is created, Netlify will generate preview builds of the site to confirm that everything is working as expected. Once code is merged to `master`, Netlify will promote that code to production at `2019.mchacks.ca`. Netlify also handles the SSL certificate for this site. @krubenok is currently the admin on the Netlify plan. 

### Domains

The primary domain for this site (`mchacks.ca`) is registered with the HackMcGill Namecheap, DNS is with Cloudflare. Currently, the naked `mchacks.ca`  and `2019.mchacks.ca` have CNAME records pointing to `mchacks6.netlify.com`

We also have a secondary set of domains, `mchcaks.io` and `2019.mchacks.io` pointing to `mchacks6.netlify.com` via CNAME as above. `mchacks.io` is also registered with Namecheap and the DNS with Cloudflare. 
