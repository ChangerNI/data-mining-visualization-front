import io from 'socket.io-client';

const socket = io.connect('http://10.202.0.8:8080/data-mining/product/spider');

export function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}
