import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  id: Number,
  food_menu: Array,
  name: String,
  deliveryTime: Number,
  score: Number,
  serviceScore: Number,
  foodScore: Number,
  rankRate: Number,
  supports: Array,
  minPrice: Number,
  deliveryPrice: Number,
  CommentCount: Number,
  sellCount: Number,
  distance: String,
  bulletin: String,
  avatar: String,
  pics: Array,
  infos: Array
});

const Store = mongoose.model("store", storeSchema);

export default Store;