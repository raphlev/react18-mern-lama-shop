# E-commerce app

MERN Stack e-commerce project for beginners. 
React, Node.js Full-Stack shopping app couse using Redux, Stripe, and JWT.

part 1 (React Design): https://youtu.be/c1xTDSIXit8
part 2 (Node.js API): https://youtu.be/rMiRZ1iRC0A
part 3 (redux, redux-persist, react-stripe-checkout): https://youtu.be/y66RgYMAgSo
React admin dashboard: https://youtu.be/aTPkos3LKi8

## API Server
cors, crypto-js, express, jsonwebtoken, mongoose, stripe

Env variables:
    MONGO_URL : store products list
    PORT : express node app port
    PASS_SEC : any local secret string to be used to generate jwt token
    JWT_SEC : any local secret string to be used to generate jwt token
    STRIPE_KEY : get rom https://dashboard.stripe.com/test/dashboard


## Client
material-ui, reduxjs/toolkit, axios, react, react-dom, react-redux, react-router-dom, react-stripe-checkout (stripe checkout component), redux-persist (to persist local state into browser localstorage), styled-components

## Admin
material-ui, reduxjs/toolkit, axios, firebase, react, react-dom, react-redux, react-router-dom, recharts, redux-persist, timeago.js

using firebase > storage :
create project storage
update rules: 
    rules_version = '2';
    service firebase.storage {
    match /b/{bucket}/o {
        match /{allPaths=**} {
        allow read, write: if request.auth != null;
        }
    }
    }
to
    rules_version = '2';
    service firebase.storage {
    match /b/{bucket}/o {
        match /{allPaths=**} {
        allow read, write: if request.auth == null;
        }
    }
    }
Go to Project Settings Add Firebase to Your Project (WEB)
enter project name
register app
copy code inti firebase.js

 ## Issues
Remove "react-app/jest" from
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    }


Error: Cannot read properties of null (reading 'user')
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken || "";
