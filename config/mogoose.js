// require the packages
const mongoose = require('mongoose');
const dotenv = require('dotenv');

require("dotenv").config();
//connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});





const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console.error, 'Error in connecting to MongoDB')
);

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});
// export the module
module.exports = db;
