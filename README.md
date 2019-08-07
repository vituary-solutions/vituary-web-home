# Vituary Solutions Website

This is the source code for the [Vituary Solutions](https://www.vituary.com/).  It is provided as sample code and may
be forked and modified as you see fit.  Please note that while the sample code is free, the contents of the site are
the copyrighted property of Vituary Solutions. You must replace the site content with your own.

This source is provided as is without any promises or warranty.  Use at your own risk.

## Project Overview

### Source Code

This project contains primarily JavaScript source code, leveraging the following frameworks:
- [Vue.js](https://vuejs.org/) - Primary Application Framework
- [Quasar](https://quasar.dev/) - UI Framework following [Material Design](https://material.io/) guidelines
- [Stylus](http://stylus-lang.com/) - CSS generating language

### Serverless Deployment

Hosting for this site is provided by [Firebase](https://firebase.google.com/), leveraging these products:
- [Hosting](https://firebase.google.com/products/hosting/) - Serving static content
- [Functions](https://firebase.google.com/products/functions/) - Executing on demand server side JavaScript functions

## Project setup

### Install Firebase CLI
[Firebase CLI](https://firebase.google.com/docs/cli) enables you to interact with Firebase locally and deploy the
application. To run the [emulator with cloud functions](https://firebase.google.com/docs/functions/local-emulator),
`firebase-admin` and `firebase-functions` are also required.
```
npm install -g firebase-tools firebase-admin firebase-functions
```

### 
Configure both the main project and the cloud functions:
```
npm install
cd functions
npm install
```

### Compiles and hot-reloads the main application for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run the Firebase emulator locally
The project has configured Firebase to use the minified application, so you must run `build` before this step.  There
are no hot-reloads in this case.
```
firebase serve
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Deploy to Firebase
Firebase will deployed the minified application, so `build` is required before this step.
```
firebase deploy
```

### Customize configuration

#### Firebase
See [Setup Reference](https://firebase.google.com/docs/web/setup/) for setting up a Firebase project.  At a minimum you
will need to create a project and register your app.

The cloud functions portion of the application requires a minimum of 3 settings:
```
firebase functions:config:set gmail.email=<from-email>
firebase functions:config:set gmail.password=<from-password>
firebase functions:config:set contact.email=<to-email>
```

To reference the settings locally, export them to a local hidden file.  Do not commit this file!
```
firebase functions:config:get > functions/.runtimeconfig.json
```

Assuming you are using Gmail, you will either need to generate an [App Password](https://support.google.com/accounts/answer/185833?hl=en)
or [allow less secure apps](https://support.google.com/accounts/answer/6010255).   

#### Vue.js
See [Configuration Reference](https://cli.vuejs.org/config/).
