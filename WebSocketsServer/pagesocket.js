const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "http://10.84.162.187:8080",
        methods: ["GET", "POST"],
        credentials: true
      }
});

io.on('connection', socket => {
  console.log('page connected');

  socket.on('tablet-img-switch', data => {
    io.emit('page-img-switch', { page: data.page, img: data.img });
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(3000);
console.log("listening on port 3000");