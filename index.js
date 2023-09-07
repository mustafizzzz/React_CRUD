const express = require('express');
const mongoose = require('mongoose');
const { async } = require('regenerator-runtime');

require('./db/config')
const app = express();
const User = require('./db/users')
const Products=require('./db/Products')

const Cors = require('cors');


//middleware
app.use(express.json())
app.use(Cors());


app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;


    res.send(result)

})

app.post('/login', async (req, res) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {

            res.send(user)
        } else {
            res.send({ result: 'No user found' })

        }

    }else {
        res.send("Please enter valid inputs")
    }


})

app.post('/add-products',async(req,res)=>
{
    let product = new Products(req.body);
    let results = await product.save();
    res.send(results)

})

app.get('/products',async(req,res)=>
{
    let products= await Products.find();
    if(products.length > 0){
        res.send(products);

    }else{
        res.send({results:'No Product Found'})
    }

})

app.delete('/products/:id',async(req,res)=>
{
    
    const result =await Products.deleteOne({_id:req.params.id})
    res.send(result)

})

app.get('/products/:id',async(req,res)=>
{
    let result = await Products.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    }else {
        res.send({result:"Not Found"});
    }
});

app.put("/products/:id",async(req,res)=>{
    let result = await Products.updateOne(
        {_id: req.params.id },
        {
            $set : req.body
        }
        )

        res.send(result);



});

app.get('/search/:key',async(req,res)=>{
    let result=await Products.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });

    res.send(result);

})


app.listen(5000)
