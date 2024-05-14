const mongoose = require('mongoose');
const { authSchema } = require('./schemas');

const authModel = mongoose.model('auth', authSchema);

module.exports = {authModel };