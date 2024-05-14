const mongoose = require('mongoose');
const { inventorySchema } = require('./schemas');

const inventoryModel = mongoose.model('inventory', inventorySchema);

module.exports = {inventoryModel };