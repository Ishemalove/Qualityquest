const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductModel = require('./module/product')

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ems", {});




app.get("/products", (req,res) => {
    ProductModel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


app.post("/create", (req,res) => {
    ProductModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})


app.get("/getproduct/:id", (req, res) => {
    const id = req.params.id;
    ProductModel.findById(id)
        .then(products => res.json(products))
        .catch(err => res.json(err));
});



app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    ProductModel.findByIdAndUpdate(id, {
        product: req.body.product,
        price: req.body.price,
        date: req.body.date 
    }, { new: true }) 
        .then(products => res.json(products))
        .catch(err => res.json(err));
});


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    ProductModel.findByIdAndDelete({_id: id}) 
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {console.log("Hey Love, the server is running!")})
