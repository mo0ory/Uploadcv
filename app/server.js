var express = require('express');
var mongoose = require('mongoose');
const items = require('./routes/api/items');
var bodyParser = require('body-parser');
var multer = require('multer')
var cors = require('cors');

//set up express app
const app = express();
app.use(express.json());
app.use(cors);

// // bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/items', items);

//connect database
var url = 'mongodb://localhost:27017/information';

mongoose.connect(url, { useNewUrlParser: true,  useCreateIndex: true })
  .then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err))


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage }).single('file');

app.get('/', function (req, res) {
  return res.send('Hello Server')
})

app.post( function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    res.send([req.files[0].filename]);
    return res.status(200).send(req.file)

  })

});

const port = process.env.PORT || 3000
app.listen(port, () =>
  console.log('server started on port 3000')
);

