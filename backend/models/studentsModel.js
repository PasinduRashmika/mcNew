const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A student must have a title'],
  },
  name: {
    type: String,
    required: [true, 'A student must have a name'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },mobile: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ['student'],
    default: 'student',
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same...!',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken:String,
  passwordResetExpires:Date,
  active:{
    type:Boolean,
    default:true,
    select:false
  },
   drugs:{
    type:mongoose.Schema.ObjectId,
    ref:Drugs,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'please provide a BirthDay']
  },
  regNo: {
    type: String,
    required: [true, 'please provide a registration Number'],
    minlength: 10,
  },
  age: {
    type: Number,
    required: [true, 'please provide the age'],
    minlength: 2,
  },
  faculty: {
    type: String,
    required: [true, 'please provide a faculty'],
    enum: {
      values: [
          'agriculture', 'allied health science', 'engineering',
          'fisheries and marine science', 'humanities and social science', 'management and finance', 'medicine', 'science', 'technology'
      ],
      message: `faculty must be one of these values: < 'agriculture', 'allied health science', 'engineering',
      'fisheries and marine science', 'humanities and social science','management and finance','medicine','science','technology' > `
  }
  },
  civilState: {
    type: String
  },
  gender: {
    type: String,
    required: [true, 'please provide a gender'],
  },
  address: {
    type: String,
    required: [true, 'please provide a address'],
  },
  subjects: {
    type: String
  },
  attempt: {
    type: Number
  },
  school: {
    type: String
  },
  leavings: {
    type: String
  },
  SchoolGames: {
    type: String
  },
  universityGames: {
    type: String
  },
  habits: {
    type: String
  },
  commences: {
    type: String
  },
  // rice: {
  //   type: Boolean,
  //   default:false,
  //   select:true
  // },
  // eggs: {
  //   type: String,
  //   default:false,
  //   select:true
  // },
  // vegetables: {
  //   type: String,
  //   default:false,
  //   select:true
  // },
  // fish: {
  //   type: String,
  //   default:false,
  //   select:true
  // },
  // meat: {
  //   type: String,
  //   default:false,
  //   select:true
  // },
  // dryFish: {
  //   type: String,
  //   default:false,
  //   select:true
  // },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  chestExpansionInsp: {
    type: String
  },
  chestExpansionExp: {
    type: String
  },
  visionL: {
    type: String
  },
  visionR: {
    type: String
  },
  teeth: {
    type: String
  },
  hearing: {
    type: String
  },
  chestXRay: {
    type: String
  },
  tuberculinThroat: {
    type: String
  },
  tuberculinTesBP: {
    type: String
  },
  vitaminDeficiencies: {
    type: String
  },
  heart: {
    type: String
  },
  lungs: {
    type: String
  },
  abdomen: {
    type: String
  },
  varicoseVeins: {
    type: String
  },
  centralNervous: {
    type: String
  },
  remarks: {
    type: String
  },
  fatherisAlive: {
    type: String,
    default:true,
    select:false
  },
  fatherOccupation: {
    type: String
  },
  motherisAlive: {
    type: String,
    default:true,
    select:false
  },
  motherOccupation: {
    type: String
  },
  Siblings: {
    type: String
  },
  Income: {
    type: String
  },
  familyHistory: {
    type: String
  },
  diagnosis: {
    type: String
  },
  treatments: {
    type: String
  },
  drugs: {
    type: String
  }
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save',function(next){
  if(!this.isModified('password')|| this.isNew)return next();
  this.passwordChangedAt = Date.now()-1000;
  next();
});

userSchema.pre(/^find/, function(next){
  //this point to the current query
  this.find({active:{$ne:false}});
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePaswword,
  userPassword
) {
  return await bcrypt.compare(candidatePaswword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }

  //False means not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');

  console.log({resetToken},this.passwordResetToken);

  this.passwordResetExpires= Date.now()+10*60*1000;
  return resetToken;
};

const Student = mongoose.model('User', studentSchema);
module.exports = Student;
