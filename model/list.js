let mongoose = require("mongoose");

let ListSchema = new mongoose.Schema({ 
    "title": String,
    "description": String,
    "price": String,

})


let ListModel = new mongoose.model("list", ListSchema);

module.exports = ListModel; 