const stream = require("stream");
var MyReadable = new stream.Readable();
MyReadable.push("abcdefghijklmnopqrstuvwxyz");
MyReadable.push(null);
MyReadable.pipe(process.stdout);