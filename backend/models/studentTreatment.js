const mongoose = require('mongoose');
const validator = require('validator');


const studentTreatmentSchema = new mongoose.Schema({
  student:{
    type:mongoose.Schema.ObjectId,
    ref:'StudentNew',
    required:[true,'A treatment should belongs to a student']
  },
  diagnosis: {
    type: String,
    required: [true, 'A student must have a diagnosis'],
  },
  treatment: {
    type: String,
    required: true,
  },
  reminder:{
    type:Date,
    required:false,
  }
});

const StudentTreatment = mongoose.model('StudentTreatment', studentTreatmentSchema);
module.exports = StudentTreatment;
