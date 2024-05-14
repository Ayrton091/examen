const mongoose = require('mongoose');
const { inventorySchema } = require('./schemas');

const inventoryModel = mongoose.model('Pay', inventorySchema);

module.exports = {inventoryModel };