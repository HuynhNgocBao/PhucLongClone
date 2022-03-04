const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/PhucLong_clone');
        console.log("Successfully");
    }
    catch(error){
        console.log("Error");
    }
}

module.exports = {connect};