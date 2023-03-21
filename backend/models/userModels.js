const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A USer must have a title'],
  },
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },mobile: {
    type: String,
    required: [true, 'A tour must have a mobile number'],
    unique: true,
    minlength: 10,
  },
  photo: String,
  role: {
    required: true,
    type: String,
    enum: ['admin', 'doctor', 'dentist', 'nurse','head','receptionist','pharmacy','phi','studentaffairbranch','mc-cleark','user','student'],
    default: 'student',
  },
  password: {
    type: String,
    minlength: 8,
    default:'test1234',
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same...!',
    },
    default:'test1234',
  },
  passwordChangedAt: Date,
  passwordResetToken:String,
  passwordResetExpires:Date,
  active:{
    type:Boolean,
    default:true,
    select:false
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

const User = mongoose.model('User', userSchema);
module.exports = User;
