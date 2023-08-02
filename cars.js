/* eslint-disable max-lines */
const mongoURL="mongodb+srv://naib:naib123@cluster0.pe8fx1k.mongodb.net/Rent-Car-Now?retryWrites=true&w=majority"
const mongoose = require('mongoose');
mongoose
    .connect(mongoURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => {
        console.log('Smongodb connected');
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