const mongoose = require('mongoose');
// exployyee schema for storing employee details
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    myReviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    myEvaluations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeeSchema);
// export employee model globally so that each function and file can use it 
module.exports = Employee;
