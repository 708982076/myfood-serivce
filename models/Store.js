import mongoose from "mongoose";
import sellers from "../dataInit/stores-init";
import shopInfoData from "../dataInit/shopInfo-init";
import commentsData from "../dataInit/comments-init";
import commentModel from "./Comment";
import shopInfoModel from "./StoreInfo";

const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    name: String,
    food_menu: Array,
    description: String,
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
  },
  {
    versionKey: false
  }
);

const Store = mongoose.model("store", storeSchema);

Store.findOne().then(res => {
  if (!res) {
    Store.create(sellers).then(res => {
      res.forEach((f, i) => {
        commentModel.create(Object.assign(commentsData[i], { _id: f._id }));
        shopInfoModel.create(Object.assign(shopInfoData[i], { _id: f._id }));
      });
    });
  }
});

export default Store;
