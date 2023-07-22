const mongoose = require('mongoose');
// review schema
const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },

    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },

    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  },
  {
    timestamps: true,
  }
);


const Review = mongoose.model('Review', reviewSchema);
//export review model globally
module.exports = Review;
