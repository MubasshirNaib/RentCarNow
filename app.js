/* eslint-disable max-lines */
const express = require('express');
const mongoose = require('mongoose');
const collection = require('./mongo');
// const collection2 = require('./cars');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define a schema for your form data
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    fromAddress: String,
    toAddress: String,
    journeyDate: String,
    journeyTime: String,
    trans: String
});

// Create a model based on the schema
const FormDataModel = mongoose.model('FormData', formDataSchema);

const abcD=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}
)
const admindata = mongoose.model("admins",abcD);

app.get('/', cors(), (req, res) => {});

app.get('/users', async (req, res) => {
    try {
        let users = await collection.find();
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});
app.get('/cars', async (req, res) => {
    try {
        let users = await FormDataModel.find();
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});
app.delete('/deletecar/:id', (req, res) => {
    const id = req.params.id;
    FormDataModel.findByIdAndDelete({ _id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
app.post('/admin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await admindata.findOne({ email: email });

        if (check.password === password) {
            
            return res.json('exist');
        } else  {
            res.json('notexist');
        }
    } catch (e) {
        res.json('notexist');
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check.password === password) {
            console.log(check.name, check.email, check.password, check.phone);
            return res.json('exist');
        } else {
            res.json('notexist');
        }
    } catch (e) {
        res.json('notexist');
    }
});

app.post('/cars', async (req, res) => {
    const { name, email, phoneNumber, fromAddress, toAddress, journeyDate, journeyTime, trans } = req.body;

    // -----------------
    try {
        // Create a new document using the FormDataModel
        const formData = new FormDataModel({ name, email, phoneNumber, fromAddress, toAddress, journeyDate, journeyTime, trans });
       
        const check89 = await FormDataModel.findOne({ name: name });
        res.json('exist');
        await formData.save();
        // if(check89){
        //     res.json('naib');
        // }
        // else{
        //     res.json('exist');
        //     await formData.save();

        // }
        // Save the data to MongoDB
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

    // Save the data to MongoDB
    // await formData.save();
    // ------------------

    // console.log(req.body);

    // const data = {
    //     name: name,
    //     email: email,
    //     phoneNumber: phoneNumber,
    //     fromAddress: fromAddress,
    //     toAddress: toAddress,
    //     journeyDate: journeyDate,
    //     journeyTime: journeyTime,
    //     trans: trans
    // };
    // try {
    //     const check = await collection2.findOne({ email: email });

    //     if (check) {
    //         alert('exist');
    //         return res.json('exist');
    //     } else {
    //         res.json('notexist');
    //         await collection2.insertMany([data]);
    //         alert('inserted data to mongodb');
    //     }
    // } catch (e) {
    //     res.json('fail');
    // }
});

app.post('/register', async (req, res) => {
    const { name, email, phone, password } = req.body;
    const data = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };
    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json('exist');
        } else {
            res.json('notexist');
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json('notexist');
    }
});

app.listen(8001, () => {
    console.log('port connected');
});
