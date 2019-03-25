import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  activityList: Array,
  serTime: Array,
  shopAddress: String,
  shopName: String,
  shopPhone: Array,
  tip: String
},{
  versionKey: false
});

const Store = mongoose.model("storeinfo", storeSchema);

export default Store;