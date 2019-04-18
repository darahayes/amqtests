var container = require('rhea');
container.on('connection_open', function (context) {
    context.connection.open_receiver('examples');
    context.connection.open_sender('examples');
});
container.on('message', function (context) {
    console.log(context.message.body);
    context.connection.close();
});
container.once('sendable', function (context) {
    context.sender.send({body:'Hello World!'});
});
container.connect({'port':5672});