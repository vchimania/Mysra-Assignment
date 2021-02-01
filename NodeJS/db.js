const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', { useNewUrlParser: true },{ useNewUrlParser: true },{ useCreateIndex: true}, (err)=>{
    
if(!err)
        console.log('MongoDb connection succeeded....');
    else
        console.log('Error in DB Connection:'+ JSON.stringify(err,undefined,2));
});
module.exports=mongoose;