const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
    {   
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required : true,
        },
        line1 : {
            type : String,
            required : true,
        },
        city : {
            type : String,
            required: true,
        },
        state : {
            type : String,
            required : true,
        },
        postalCode : {
            type : Number,
            required : true,
        }
    }
)

module.exports = mongoose.model('Address', addressSchema);