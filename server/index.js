var http = require('http');
var app  = require('./app')

var httpServer = http.createServer(app);

httpServer.listen(process.env.port || 3002,() => {
    console.log(`server started on port ${process.env.port || 3001}`);
});