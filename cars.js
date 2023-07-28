/* eslint-disable max-lines */
const mongoose = require('mongoose');
mongoose
    .connect('mongodb://0.0.0.0:27017/react-login-tut')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('failed');
    });

const carReqSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    fromAddress: {
        type: String,
        required: true
    },
    toAddress: {
        type: String,
        required: true
    },
    journeyDate: {
        type: Date,
        required: true
    },
    journeyTime: {
        type: String,
        required: true
    },
    trans: {
        type: String,
        required: true
    },
   
});

const collection2 = mongoose.model('cars', carReqSchema);


module.exports = collection2;