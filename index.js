let express = require("express");
let app = new express();
let mongoose = require("mongoose");
let cors = require('cors');
const dotenv = require('dotenv');


mongoose.set("strictQuery", false);
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


let portNum = process.env.PORT || 8000;
let mongo = process.env.DBURL || ""

let crud_route = require('./routes/list')

async function connect(){
    console.log("Connecting...");
    await mongoose.connect(mongo, {
    }).then(console.log("MDBA Connected!")).catch(err => console.log("ERROR"));
    console.log("connected!");
}

app.listen(portNum, ()=>{
    console.log(`Server listening on port ${portNum}`);
})

app.get("/test", async (req, res) => {
    res.send(`testing api`);
});

app.use('/test/list/', crud_route)

connect()
