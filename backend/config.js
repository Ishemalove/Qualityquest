const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/EcommDash")
mongoose.set('strictQuery', true);
