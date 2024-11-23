const mongoose =require('mongoose');

const connectDB = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("connection to database successfully!");
    }
    catch(err){
        console.log("Error in dbConnnection.js: ",err)
        process.exit(1);
    }
}

module.exports = connectDB;