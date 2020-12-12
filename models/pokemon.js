const mongoose=require('mongoose');
const pokemonSchema=new mongoose.Schema({
    name:{type:String,trim:true,require:true},
    img:{type:String,trim:true,require:true},
},{ timestamps: true });
const Pokemon=mongoose.model('Pokemon',pokemonSchema);
module.exports=Pokemon;