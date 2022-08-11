const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyname",() => 
{
    console.log("your name is Amit")
});
event.on("sayMyname",() => 
{
    console.log("your name is Kumar")
});
event.on("sayMyname",() => 
{
    console.log("your name is gautam")
});

event.emit("sayMyname");