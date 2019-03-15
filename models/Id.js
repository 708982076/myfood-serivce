import mongoose from 'mongoose';

const Schama = mongoose.Schema;

const idSchama = new Schama({
  userId: Number,
  storeId: Number,
  commentId: Number
});

const Id = mongoose.model('id', idSchama);

Id.findOne((err, res) => {
  if (!res) {
    const id = new Id({ userId: 0, storeId: 0, commentId: 0 })
    id.save();
  }
})

export default Id;