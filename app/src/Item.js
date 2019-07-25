const mongoose=require('mongoose');
const Schema= mongoose.Schema
//Create Schema
const ItemSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    major:{
        type:String,
        required:true
    },
    cv:{
        type:Object,
        required:true }

});

// eslint-disable-next-line no-undef
module.exports=Item= mongoose.model('item',ItemSchema);


