import mongoose from 'mongoose';

const Schama = mongoose.Schema;

const userSchema = new Schama({
  username: String,
  password: String,
  id: Number,
  create_time: String,
  avatar: String,
  city: String
});
const User = mongoose.model('User', userSchema);

export default User;