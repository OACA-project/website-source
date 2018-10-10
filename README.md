# PLEASE NOTE: PROJECT HAS BEEN ARCHIVED

The OACA site is being hosted in a different fashion and this content has become redundant. The repository has been archived and is now in a read only state (although it can still be forked).

# OACA Website Source
This repository contains the static build artifacts to actively develop against the project website.

## Development
Instructions assume you already have Node and NPM installed on your system.

### Clone the repo and install deps
```sh
$ git clone git@github.com:OACA-project/website-source.git
$ cd website-source
$ npm i
```

### Watch files
By running the dev script, your static `src` directory will be watched and built into the `dist` folder.

```sh
$ npm run dev
```

### Update Website Repo
When you are satisfied with the changes you have made, copy the entire contents of the `dist` folder into a branch of the project repo and submit a merge request.
