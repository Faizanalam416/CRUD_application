const mongoose = require("mongoose");

const DB = "mongodb+srv://fa09042003:MFtwzkmaqJFVtE2F@cluster0.tloaict.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));