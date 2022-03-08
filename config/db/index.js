const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://PhucLong_clone:anything@cluster0.doilf.mongodb.net/PhucLong_clone');
        console.log("Successfully");
    }
    catch(error){
        console.log("Error");
    }
}

module.exports = {connect};