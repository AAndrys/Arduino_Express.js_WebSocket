const bON = document.getElementById('buttonON');
const bOFF = document.getElementById('buttonOFF');
const bBlink = document.getElementById('buttonBlink');
const inputBrightness = document.getElementById('inputBrightness');

const socket = new WebSocket('ws://192.168.1.35:8080');

bON.addEventListener('click', (e) => {
    e.preventDefault();
    socket.send('true');
})

bOFF.addEventListener('click', (e) => {
    e.preventDefault();
    socket.send('false');
})
bBlink.addEventListener('click', (e) => {
    e.preventDefault();
    socket.send('blink');
})

inputBrightness.addEventListener('input', (e) => {
    // console.log(e.target.value);
    // let object = {
    //     title: 'Number',
    //     number: e.target.value
    // }
    // socket.send(JSON.stringify({ title: 'Number', number: e.target.value }));
})