const express = require("express")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { authModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive Company"); })

app.get('/signin', async(req,res)=>{
    const list = await authModel.find({});
    res.json( list );
})
