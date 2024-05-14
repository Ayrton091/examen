const mongoose = require('mongoose');
const ordersSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
      },
    quantity: {
      type: String,
      required: true
    }
  });

  module.exports = {ordersSchema}