/*
    ..........................
    .... Nodejs + Arduíno ....
    ...      2 LEDS        ...
    ...     ArrayList      ...
    ..........................

*/

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var leds = ["led1", "led2"];
  leds[0] = new five.Led(2);
  leds[1] = new five.Led(4);
  leds[0].blink(500); // 500 - tempo p piscar
  leds[1].blink(500); // 500 - tempo p piscar
});
