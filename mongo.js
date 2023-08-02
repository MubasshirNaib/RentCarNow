const mongoose= require('mongoose');
const mongoURL="mongodb+srv://naib:naib123@cluster0.pe8fx1k.mongodb.net/Rent-Car-Now?retryWrites=true&w=majority"
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    console.log("mongodb connected");
}
)
.catch(()=>{
    console.log("failed");
}
)
const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}
)
const collection = mongoose.model("collections",newSchema)

module.exports=collection