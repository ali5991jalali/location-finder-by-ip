const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const schema = mongoose.Schema;

const enter_schema = new schema({

    ip: { type: String },
    service: { type: String },
    region: { type: String, default: '' },
    country: { type: String, default: '' },
    city: { type: String, default: '' },
    latitude: { type: String, default: '' },
    longitude: { type: String, default: '' }

})

enter_schema.plugin(timestamp)

module.exports = mongoose.model('enter', enter_schema);