const mongoose=require('mongoose');

const adminData=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    val:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('admin',adminData);