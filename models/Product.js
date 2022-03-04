const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        title: {type: String, required: true},
        weight: {type: Number},
        price: {type: Number},
        category_slug: {type: String },
        slug: {type: String, slug:'title',unique: true},
    },
    {
        timestamps: true,
        collection: 'Product',
    }
)

mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Product',Product);