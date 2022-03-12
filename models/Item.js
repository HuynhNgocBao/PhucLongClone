const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        title: {type: String, required: true},
        type: {type: String},
        price: {type: Number},
        slug: {type: String, slug:'title',unique: true},
    },
    {
        timestamps: true,
        collection: 'Item',
    }
)

mongoose.plugin(slug);
Item.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Item',Item);