/*
    ..........................
    ..   Nodejs + Arduíno   ..
    ..   acendendo 1 LED    ..
    ..........................
*/

var five = require("Johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(2);
  led.blink(500);
});
