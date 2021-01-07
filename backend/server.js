const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
const morgan = require('morgan');

// load env variables
dotenv.config({ path:path.join(__dirname, '/config/config.env')});
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// Use development logging middleware
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// add routes both api and view
app.use('/', routes);



const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});



// express doesn't consider not found 404 as an error so we need to handle 404 it explicitly
// handle 404 error
// app.use(function(req, res, next) {
// 	let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
