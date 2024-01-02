const express = require('express');
const mongoose = require("mongoose");
const User = require("./model/user")
const fs = require("node:fs")

const port = 3000
const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://adityasri1086:rj2zy3wzTcYAPdH5@adityacluster.4zhi1uu.mongodb.net/")
.then(() => {
    console.log("Database Connected")
}).catch((e) => {
    console.log(e)
    console.log("Database Connection Failed")
})
app.post("/", async(req, res) => {
    const userData = new User(req.body)
    await userData.save()
    let a = fs.readFileSync("submit.html")
    res.send(a.toString())
})

app.get('/', function(req,res){
  let a = fs.readFileSync("index.html")
  res.send(a.toString())

})




app.listen(port, () => {
    console.log("App running on port 3000")
});