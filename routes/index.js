const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const Article = require('../models/article');
const User = require('../models/user')

router.get('/articles', function(req, res) {
    Article.find(function(err, articles) {
        res.json(articles);
    });
});

router.get('/articles/:id', function(req, res) {
    Article.findById(req.params.id, function(err, article) {
        if (!article) {
            res.status(404).send('No result found');
        } else {
            res.json(article);
        }
    });
});

router.post('/articles', function(req, res) {
    let article = new Article(req.body);
    article.save()
    .then(article => {
        res.send(article);
    })
    .catch(function(err) {
        res.status(422).send('Article add failed');
    });
});

router.patch('/articles/:id', function(req, res){
    Article.findByIdAndUpdate(req.params.id, req.body)
    .then(function() {
        res.json('Article updated');
    })
    .catch(function(err) {
        res.status(422).send("Article update failed.");
    });
});

router.delete('/articles/:id', function(req, res) {
    Article.findById(req.params.id, function(err, article) {
        if (!article) {
            res.status(404).send('Article not found');
        } else {
            Article.findByIdAndRemove(req.params.id)
            .then(function() { res.status(200).json("Article deleted") })
            .catch(function(err) {
                res.status(400).send("Article delete failed.");
            })
        }
    });
})
//will read in a request from front end to make a user and store their data in the database
router.post('/Signup',(req,res)=>{
    const {Username, Password, Email, FirstName, LastName} = req.body
    if(!Username || !Password || !Email || !FirstName || !LastName){
        return res.status(442).json({error:"please add all the fields"})
    }
    User.findOne({Username:Username})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(442).json({error:"Username Taken"})
        }
        console.log("about to hash")
        bcrypt.hash(Password,12)
        .then(hashedPassword=>{
            const Users = new User({
                Username,
                Password:hashedPassword,
                Email,
                FirstName,
                LastName
            })
            //Users.save(function(err,newUser){
            //    console.log(newUser.id);
            //})
            console.log("about to save")
            Users.save()
            .then(user=>{
               res.send({message:"saved successfully"})
               console.log(user.id)
           })
           .catch(err=>{
            	console.log(err)
            })
        })
    })
})

router.post('/Login',(req,res)=>{
    const {Username,password} = req.body
    if(!Username || !password){
        return res.status(442).json({error:"Please add both Email and Password"})
    }
    User.findOne({Username:Username})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(442).json({error:"Please add both Email and Password"})
        }
        bcrypt.compare(Password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"successfully signed in"})
            }
            else{
                return res.status(442).json({error:"Please add both Email and Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})




module.exports = router;
