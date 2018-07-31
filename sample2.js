module.exports = function(RED){
  'use strict';
  function infraredNode(n){
    RED.nodes.createNode(this,n);
    //var Infrared = new GrovePi.sensors.DigitalInput(4);
    this.gpioPin = Number(n.gpioPin);

    console.log("gpioPin is" + this.gpioPin);
    var node = this;
    var timer;
//
    var Gpio = require('pigpio').Gpio;
    infrared = new Gpio(node.gpioPin,{mode: Gpio.OUTPUT});
    let dutyCycle = 0;

  node.on('input', function(input_msg) {
    var timer;
    var msg = new Object();
    if(input_msg == 0){
      msg.payload = "true";
    }else{
      msg.payload = "false";
    }
    node.send(msg);
  });
}
  RED.nodes.registerType("infrared-sensor",infraredNode);
}
