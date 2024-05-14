const express = require("express")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { authModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive auth"); })

app.get('/user', async(req,res)=>{
    const list = await authModel.find({});
    res.json( list );
})
app.post('/signin', async(req, res)=>{
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const address = req.body.address;
  
      const person = new authModel({ name,email,password , address});
  
      const data = await person.save();
      return res.status(201).json(data);
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  