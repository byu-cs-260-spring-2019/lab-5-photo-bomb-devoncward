const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);
const app = express();

const tickets = require("./tickets.js");
app.use("http://localhost:5000/api/tickets", tickets);

exports.app = functions.https.onRequest(app);
