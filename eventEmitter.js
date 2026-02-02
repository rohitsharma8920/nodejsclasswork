const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('doorbell', () => {
  console.log("Someone's at the door!");
});

console.log("Doing other work...");
myEmitter.emit('doorbell');
console.log("Continue working...");
