const mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    user: {
<<<<<<< HEAD
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    totalPrice: {
=======
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
    price: {
>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083
        type: Number,
        required: true
    },
}, { timestamps: true })

orderSchema.virtual('published', {
<<<<<<< HEAD
    ref: 'user',
=======
    ref: 'order',
>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083
    localField: '_id',
    foreignField: 'order'
})

orderSchema.virtual('published', {
<<<<<<< HEAD
    ref: 'product',
    localField: '_id',
    foreignField: 'order'
})
 
=======
    ref: 'order',
    localField: '_id',
    foreignField: 'product'
})
orderSchema.set('toObject', { virtuals: true })
orderSchema.set('toJSON', { virtuals: true })
>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083
module.exports = new mongoose.model('order', orderSchema)