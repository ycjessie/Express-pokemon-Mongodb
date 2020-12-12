const express = require("express");
const app = express();
const port = 3000;
//include the method-override package
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const mongoose =require('mongoose');
const dayjs = require('dayjs');
// const { create, findOneAndUpdate } = require('./models/pokemon');
//DATA

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pokemondb',{
    useNewUrlParser:true,
    useUnifiedTopology: true, 
    useFindAndModify:false,
});
mongoose.connection.once('open',()=>{
    console.log('connected to mongo');
})

//configuration
app.set('view engine', 'ejs');
//MIDDLEWARE
//body-parser
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
//For POST ROUTE req.body
app.use(express.json());
app.use(methodOverride('_method'));
app.use(expressLayouts);

const pokeController=require('./controllers/pokemons')
app.use('/',pokeController);

//Port Listening
app.listen(port, () => {
  //console.log("server is listening",port)
  console.log(`server is listening ${port}`);
});
