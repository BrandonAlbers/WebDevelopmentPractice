const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter {}

// Init object (init means initialize)
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => console.log("Event Fired"));

//Init event
myEmitter.emit("event");
