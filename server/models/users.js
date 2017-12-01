const mongoose = require('../init/db'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:String,
  email:String,
  password:String,
  sex:Number,
  description:String,
  website:String,
  articleNums:Number,
  follows:Array,
  fans:Array,
  collections:[],
  Articles:Array
});
module.exports = mongoose.model('User',UserSchema);
