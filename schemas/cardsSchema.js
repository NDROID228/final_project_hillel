const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    category: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});

const Cards = mongoose.model("Cards", cardsSchema, 'products');

module.exports = Cards; 