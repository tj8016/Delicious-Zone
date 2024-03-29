const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productName : {
            type: String,
            required : true,
            trim : true,
        },
        description : {
            type : String,
            required : true,
            trim : true,
        },
        price: {
            type: Number,
            required : true,
            trim : true,
        },
        thumbnail : {
            public_id : {
                type: String,
                required : true,
            },
            image_link : {
                type: String,
                required : true,
            }
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        ratingAndReview : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref:"RatingAndReview"
            }
        ],
        tag : {
            type : [String],
            required : true,
        },
        createdAt : {
            type : Date,
            default : Date.now,
        }
    }
)

module.exports = mongoose.model('Product', productSchema);