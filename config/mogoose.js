// require the packages
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });
//connect to the database
mongoose.connect(`mongodb://127.0.0.1:27017/review-development`, {
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
