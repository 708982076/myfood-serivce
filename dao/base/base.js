import cityModel from "../../models/City";

class Base {
  constructor() {}
  async getPosition(req, res, next) {
    const { pinyin, id } = req.query;
    try {
      if (!pinyin && !id) {
        res.send({
          code: 0,
          message: "GET_POSITION_FAILED",
          data: {
            id: 234,
            name: "信阳",
            abbr: "XY",
            area_code: "0376",
            sort: 2000,
            latitude: 32.147141,
            longitude: 114.092789,
            is_map: true,
            pinyin: "xinyang"
          }
        });
        return;
      }
      const data = await cityModel.findOne();
      const curCity = data.allCity[pinyin[0].toUpperCase()].filter(
        c => c.pinyin == pinyin && c.id == id
      );
      if (curCity.length > 0) {
        res.send({
          code: 0,
          message: "GET_POSITION_FAILED",
          data: curCity[0]
        });
      } else {
        res.send({
          code: -1,
          message: "GET_POSITION_TIMEOUT"
        });
      }
    } catch (e) {
      console.log(e);
      res.send({
        code: -2,
        message: "GET_POSITION_FAILED"
      });
    }
  }
}

export default Base;
