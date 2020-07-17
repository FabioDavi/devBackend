const mongoose = require('mongoose')

const PointSchema  = new  mongoose.Schema({
        type:{
            type: String,
            enum: ['Point'],
            required: true,
        },

        coordinates:{
            type: [Number],
            required: true,
        },
});

module.exports = PointSchema
////https://dev.to/petereysermans/hosting-a-node-js-application-on-windows-with-iis-as-reverse-proxy-397b
