import mongoose from 'mongoose';

const Schama = mongoose.Schema;

const userSchema = new Schama({
  username: String,
  password: String,
  create_time: String,
  avatar: String,
  city: String
},{
  versionKey: false
});
const User = mongoose.model('User', userSchema);

export default User;