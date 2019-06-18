const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const router = express.Router();

var db = firebase.firestore();

var ticketsRef = db.collection('tickets');

//Add api calls here
router.get('/api/tickets', async (req, res) => {
  let querySnapshot = await ticketsRef.get();
  res.send(querySnapshot.docs.map(doc => doc.data()))
});

router.post('http://localhost:5000/api/tickets', async (req, res) => {
  let querySnapshot = await ticketsRef.get();
  let numRecords = querySnapshot.docs.length;
  let ticket = {
    id: "created" + Date(),
    message: req.body.message,
  };
  ticketsRef.doc(ticket.id.toString()).set(ticket);
  res.send(ticket);
});

module.exports = router;
