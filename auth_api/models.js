const mongoose = require('mongoose');
const { authSchema } = require('./schemas');

const authModel = mongoose.model('Pay', authSchema);

module.exports = {authModel };