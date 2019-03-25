import Base from "../base/base";
import store from "../../models/Store";
import commentModel from "../../models/Comment";
import storeInfoModel from "../../models/StoreInfo";

class Store extends Base {
  constructor() {
    super();
  }
  async getKeywordStore(req, res) {
    let { keyword } = req.query;
    keyword = decodeURIComponent(keyword);
    if (!keyword) {
      res.send({
        code: -1,
        message: 'KEYWORD_NOTNULL'
      })
      return ;
    }
    try {
      const stores = await store.find();
      const filtered = stores.filter( store => {
        const name = store.name;
        return name.includes(keyword);
      } );
      if (filtered.length > 0) {
        return res.send({
          code: 0,
          message: 'KEYWORD_SUCCESS',
          data: filtered
        })
      }else {
        res.send({
          code: -1,
          message: 'KEYWORD_NOTFOUND'
        })
      }
    }catch(e) {
      res.send({
        code: -2,
        message: 'KEYWORD_FAILED'
      })
    }
  }
  async getStoreInfo(req, res) {
    const { id } = req.query;
    try {
      const info = await storeInfoModel.findOne({ _id: id });
      if (info) {
        res.send({
          code: 0,
          message: "FIND_INFO_SUCCESS",
          data: info
        });
      } else {
        res.send({
          code: -1,
          message: "FIND_INFO_NOTFOUND"
        });
      }
    } catch (e) {
      res.send({
        code: -2,
        message: "FIND_INFO_FAILED"
      });
    }
  }
  async getComment(req, res) {
    const { id } = req.query;
    try {
      const comment = await commentModel.findOne({ _id: id });
      if (comment) {
        res.send({
          code: 0,
          message: "FIND_COMMENT_SUCCESS",
          data: comment
        });
      } else {
        res.send({
          code: -1,
          message: "FIND_COMMENT_NOTFOUND"
        });
      }
    } catch (e) {
      res.send({
        code: -2,
        message: "FIND_COMMENT_FAILED"
      });
    }
  }
  async getStoreList(req, res) {
    try {
      const count = await store.countDocuments();
      const storeItem = await store
        .find
        // {},
        // null,
        // { limit: 2, skip: Math.floor( Math.random() * ( count - 2 )  ) }
        ();
      res.send({
        code: 0,
        message: "FIND_STORE_SUCCESS",
        data: storeItem
      });
    } catch (e) {
      console.error(e);
      res.send({
        code: -2,
        message: "FIND_STORE_FAILED"
      });
    }
  }
  async getStoreItem(req, res) {
    const { id } = req.query;
    try {
      const storeItem = await store.findOne({ _id: id });
      if (!storeItem) {
        res.send({
          code: -1,
          message: "FIND_STORE_NOTHING"
        });
      } else {
        res.send({
          code: 0,
          message: "FIND_STORE_SUCCESS",
          data: storeItem
        });
      }
    } catch (e) {
      res.send({
        code: -2,
        message: "FIND_STORE_FAILED"
      });
    }
  }
}

export default new Store();
