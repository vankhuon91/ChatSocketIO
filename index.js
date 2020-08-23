var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors=require('cors')


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://phuong1234:1234phuong@cluster0-lyjjj.mongodb.net/chatroom?retryWrites=true&w=majority', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo is connected! ')
});

app.use(cors({
  origin: 'http://192.168.141.104:3000',
  credentials: true,
}))


var cookieParser = require('cookie-parser')
app.use(cookieParser('abc'))

var bodyParser = require('body-parser')
app.use(bodyParser.json());

//----------------------------------------------------------------------------------------------------
const usersRoute=require('./routers/users.route')
const roomsRoute=require('./routers/rooms.route')
const auMiddleware=require('./middleware/au.middleware')


app.get('/', (req, res) => {
  res.send("WTC");
});

app.use('/users',usersRoute)
app.use('/rooms',roomsRoute)


io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log(socket.id, msg);
    io.emit('chat message','anh yeu em.'+ msg)
  });
});



http.listen(3001, () => {
  console.log('listening on *:3000');
});