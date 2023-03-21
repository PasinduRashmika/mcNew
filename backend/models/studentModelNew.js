const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Drugs = require('./drugModels');

const studentNewSchema = new mongoose.Schema({
  // drugs:{
  //   type:mongoose.Schema.ObjectId,
  //   ref:Drugs,
  // },
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
  },
  photo: String,
  initialMedicalReport:String,
  role: {
    type: String,
    enum: ['student'],
    default: 'student',
  },
  password: {
    type: String,
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
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
  },mobile: {
    type: String,
    required: [true, 'please provide a mobile Number'],
    minlength: 10,
  },
  civilState: {
    type: String
  },
  gender: {
    type: String,
    required: [true, 'please provide a gender'],
  },
  level: {
    type: String,
    required: [true, 'please provide a level'],
  },
  address: {
    type: String,
    required: [true, 'please provide a address'],
  },
  subjects: {
    type: String
  },
  attempt: {
    type: String
  },
  school: {
    type: String
  },
  ageOfLeaving: {
    type: String
  },
  leavings: {
    type: String
  },
  gamesPlayedInSchool: {
    type: String
  },
  universityGames: {
    type: String
  },
  alcohol: {
    type: String
  },
  tobacco: {
    type: String
  },
  betalChewing: {
    type: String
  },
  commences: {
    type: String
  },
  isTuberculosis: {
    type: Boolean,
    default:false,
    select:true
  },
  isAsthma: {
    type: Boolean,
    default:false,
    select:true
  },
  isNervousBreakdown: {
    type: Boolean,
    default:false,
    select:true
  },
  isEpilepsy: {
    type: Boolean,
    default:false,
    select:true
  },
  rice: {
    type: String
  },
  eggs: {
    type: String
  },
  vegetables: {
    type: String
  },
  fish: {
    type: String
  },
  meat: {
    type: String
  },
  dryFish: {
    type: String
  },
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
  siblings: {
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
studentNewSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

studentNewSchema.pre('save',function(next){
  if(!this.isModified('password')|| this.isNew)return next();
  this.passwordChangedAt = Date.now()-1000;
  next();
});

studentNewSchema.pre(/^find/, function(next){
  //this point to the current query
  this.find({active:{$ne:false}});
  next();
});

studentNewSchema.methods.correctPassword = async function (
  candidatePaswword,
  studentPassword
) {
  return await bcrypt.compare(candidatePaswword, studentPassword);
};

studentNewSchema.methods.changePasswordAfter = function (JWTTimestamp) {
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

studentNewSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');

  console.log({resetToken},this.passwordResetToken);

  this.passwordResetExpires= Date.now()+10*60*1000;
  return resetToken;
};

const StudentNew = mongoose.model('StudentNew', studentNewSchema);
module.exports = StudentNew;
