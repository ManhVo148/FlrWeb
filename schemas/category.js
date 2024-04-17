const mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true })

categorySchema.virtual('published', {
    ref: 'product',
    localField: '_id',
    foreignField: 'category'
})
<<<<<<< HEAD
categorySchema.statics.getCategories  = async function() {
    try {
        const category = await this.find(); 
        return category;
=======
categorySchema.statics.getcategory = async function() {
    try {
        const categories = await this.find(); 
        return categories;
>>>>>>> 342d329f1f4cacc50fa3c1afe35dd1dbad437083
    } catch (error) {
        throw error;
    }
};
categorySchema.set('toObject', { virtuals: true })
categorySchema.set('toJSON', { virtuals: true })
module.exports = new mongoose.model('category', categorySchema)