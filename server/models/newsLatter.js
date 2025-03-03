const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsLatterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model('newslatter', NewsLatterSchema);