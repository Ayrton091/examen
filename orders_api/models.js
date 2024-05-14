const mongoose = require('mongoose');
const { ordersSchema } = require('./schemas');

const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = {ordersModel };