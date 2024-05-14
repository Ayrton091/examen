const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true
      },
    product: {
      type: String,
      required: true
    },
    quantity: {
        type: String,
        required: true
    }
  });

  module.exports = {inventorySchema}