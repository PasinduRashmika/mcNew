const mongoose = require('mongoose');
const validator = require('validator');


const drugsSchema = new mongoose.Schema({
    treatment:{
        type:mongoose.Schema.ObjectId,
        ref:'StudentTreatment',
        required:[true,'A treatment should belongs to a student']
      },
    name: {
      type: String,
      required: [true, 'A student must have a name'],
    },
    qty: {
      type: String,
    },
    date:{
      type:Date,
      default:Date.now()
    }
    });

  drugsSchema.pre('/^find/',function(next){

    this.populate({
      path:student,
      select:''
    })
    next()
  })
    
    
const Drugs = mongoose.model('Drugs', drugsSchema);
module.exports = Drugs;

