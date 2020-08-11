const express = require('express');
const app = express();
const port = 4000;
//Johnny five
const five = require("johnny-five");
const board = new five.Board();
//Web socket
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

app.use('/led', express.static('public'))

app.get('/', (req, res) => {
    res.send('<a href="/led">Redirect</a>')
})
board.on("ready", function () {
    let led = new five.Led(9);

    wss.on('connection', function (ws, req) {
        console.log('Connected to the web socket server.');
        ws.on('message', function (data) {
            // if (JSON.parse(data).title === 'Number') {
            //    led.brightness(JSON.parse(data).number);
            // };

            if(data === 'true') {
                led.on();
            } else {
                led.off();
            };

            if(data === 'blink') {
                led.blink(500);
            } else {
                led.stop()
            };
        });
    })
});


app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server is running...');
    }
})