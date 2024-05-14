const mongoose = require('mongoose');
const { ordersSchema } = require('./schemas');

const ordersModel = mongoose.model('Pay', ordersSchema);

module.exports = {ordersModel };