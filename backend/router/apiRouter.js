// var five = require("johnny-five");
// var board = new five.Board();

var relay;
// board.on("ready", function() {
//   relays = new five.Relays([10, 11, 12]);
// });

// http://localhost:3000/api

const openController = async (req, res) => {
  console.log("req : ", req.query.number);
  // console.log("req : ", req.query.string);
  console.log("open");
  // relays[0].open();
  res.send('temp');
};

const closeController = async (req, res) => {
  console.log("req : ", req.query.number);
  console.log("close");
  // relays[0].open();
  res.send('temp');
};

const express = require('express');
const router = express.Router();

router.get('/open', openController);
router.get('/close', closeController);

module.exports = router;
