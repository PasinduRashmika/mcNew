const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');



const newschema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'A student must have a name'],
    },
    description: {
        type: String,
        required: true,
      },
    date:{
        type:Date,
        default:Date.now()
    },
    active:{
        type:Boolean,
        default:true,
        select:false
      }

    });
    
    
const News = mongoose.model('News', newschema);
module.exports = News;