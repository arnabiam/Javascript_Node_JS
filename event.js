const EventEmitter = require("events"); //class create

const event = new EventEmitter(); //object create

// const event = require('events');
// const EventEmitter = new event.EventEmitter();

event.on("Say MY NAme", () => {
  console.log("Your Name is Arnab");
});
event.on("Say MY NAme", () => {
  console.log("Your Last Name is Sarkar");
});
event.on("Say MY NAme", () => {
  console.log("Your Another Name is Arko");
});

event.emit("Say MY NAme");

event.on("checkPage", (sc, msg) => {
  console.log(`Status code is ${sc} and message is ${msg}`);
});
event.emit("checkPage", 200, "ok");
