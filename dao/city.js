import Base from "./base/base";
import cityModel from "../models/City";

class City extends Base {
  constructor() {
    super();
  }
  async getAllCity(req, res) {
    try {
      const hotCity = await cityModel.findOne();
      res.send({
        code: 0,
        message: "CITY_QUERY_SUCCESS",
        data: hotCity
      });
    } catch (e) {
      console.log(e);
      res.send({
        code: -2,
        message: "CITY_QUERY_FAILED"
      });
    }
  }
}

export default new City();
