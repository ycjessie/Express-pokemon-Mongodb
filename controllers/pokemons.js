const express=require('express')
const router=express.Router();
const dayjs=require('dayjs');
//DATA
//const pokemons = require("./models/pokemons");
const Pokemon = require("../models/pokemon");
//const seeds = require('../models/seeds');
//const { create } = require('../models/pokemon');

//ROUTE
// SEEDS
// router.get('/pokemons/seed', (rea, res) => {
//     Pokemon.create(seeds, (err, logs) => {
//       if (err) res.send(err);
//       res.redirect('/pokemons');
//     });
//   });
//POST ROUTE when create NEW
router.post('/pokemons', (req, res)=>{
    // console.log('post route',req.body)
    // res.send('Post route is working')
    // res.send(req.body)
    // pokemons.push(req.body)
    // res.redirect('/pokemons')
    Pokemon.create(req.body,(error,createdPokemon)=>{
        //res.send(createdPokemon)//res.send to return value show on browser
        res.redirect(`/pokemons/${createdPokemon._id}`)
    })
})
//Index ROUTE
router.get("/pokemons", (req, res) => {
  //console.log('Index');
  //res.send(pokemons);
//   res.render('index.ejs',{
//       data: pokemons
//   })-->data from models/pokemon.js
    Pokemon.find({},(err,allPokemons)=>{
        if (err) res.send(err);
        res.render('index.ejs',{
         data: allPokemons//data from controllers/pokemon.js
        })
    })
});
//New ROUTE
router.get("/pokemons/new", (req,res)=>{
    //console.log('new page')
    res.render("new.ejs")
});
//SHOW ROUTE
router.get("/pokemons/:id", (req,res)=>{
    // console.log(req.params)
    // res.send(pokemons[req.params.id]);
    // res.render('show.ejs',{
    //     data:pokemons[req.params.id],
    //     id:req.params.id,
    // })
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
       // res.send(foundPokemon);
       let now = dayjs(Pokemon.createdAt);
       if (err) res.send(err);
        res.render('show.ejs',{
            data:foundPokemon,
            now,
            //id:req.params.id//no need for show.ejs==>use _id
        })
    })
})
//UPDATE
router.put("/pokemons/:id",(req,res)=>{
   
    // console.log("update route")
    //res.send(pokemons)//populate the whole object
     //pokemons[req.params.id]=req.body
    //res.send(req.body)//populate only one at the time
    Pokemon.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) res.send(err);
        res.redirect('/pokemons');
    }) 
})
//EDIT ROUTE
router.get("/pokemons/:id/edit", (req,res)=>{
     //console.log('edit page')
     //res.send(pokemons[req.params.id])
    
    //  res.render("edit.ejs",{
    //     data:pokemons[req.params.id],//send the whole kay value pairs
    //     id:req.params.id//and the id of the array
    //  });
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
        if (err) res.send(err);
         res.render("edit.ejs",{
        data:foundPokemon,//send the whole kay value pairs
        
     });
    })
})
router.delete('/pokemons/:id', (req, res) => {
	//pokemons.splice(req.params.index, 1); //remove the item from the array
    Pokemon.findByIdAndRemove(req.params.id,(err)=>{
        if (err) res.send(err);
        res.redirect('/pokemons'); 
    })
     //redirect back to index route
});
module.exports = router;
