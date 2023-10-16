const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    frontID: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

const Products = mongoose.model("Products", productSchema, 'products');

module.exports = Products; 