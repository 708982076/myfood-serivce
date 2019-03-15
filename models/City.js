import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  allCity: Object,
  hotCity: Array
})

const Cities = mongoose.model('Citie', citiesSchema);

export default Cities;