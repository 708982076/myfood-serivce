import mongoose from 'mongoose';
import allCity from '../dataInit/cities';
import hotCity from '../dataInit/hotCity';

const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  allCity: Object,
  hotCity: Array
},{
  versionKey: false,
  autoIndex: false
})

const Cities = mongoose.model('citie', citiesSchema);

Cities.findOne().then(res => {
  if (!res) {
    Cities.create({ allCity, hotCity }).then(res => console.log(res));
  }
})

export default Cities;