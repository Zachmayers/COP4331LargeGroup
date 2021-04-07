const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const Article = require('../models/article');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const {SENDGRID_KEY} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
const sgMail = require('@sendgrid/mail')



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


router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello user")
})

//will read in a request from front end to make a user and store their data in the database
router.post('/Signup',(req,res)=>{
    console.log("signup")
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
                LastName,
                temporarytoken: jwt.sign(Username, JWT_SECRET)
            })
            //Users.save(function(err,newUser){
            //    console.log(newUser.id);
            //})
            console.log("about to save")
            Users.save()
            .then(user=>{
                console.log("saved successfully")
                //res.send({message:"saved successfully"})
                console.log(user.id)
                sgMail.setApiKey(SENDGRID_KEY)
                const hrefLink = "http://localhost:3000/verify/" + Users.temporarytoken;
                const msg = {
                    to: user.Email, // Change to your recipient
                    from: 'jgwynn@knights.ucf.edu', // Change to your verified sender
                    subject: 'Sending with SendGrid is Fun',
                    text: `Hello ${Users.FirstName}, Click Here to Activate your Account or don't I am not your mom`,
                    //html: `Hello<strong> ${Users.FirstName}</strong>,<br><br> Click Here to Activate your Account or don't I am not your mom`,
                    html: `Hello<strong> ${Users.FirstName}</strong>,<br><br><a href=${hrefLink}> Click Here to Activate your Account or don't I am not your mom</a>`,
                }
                sgMail.send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
                res.json({
                    //ID: user.id,
                    succeed: true,
                    message: "User has been successfully activated"
                });
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
})

router.post('/Login',(req,res)=>{
    console.log("login")
    const {Username,Password} = req.body
    if(!Username || !Password){
        console.log("something is missing")
        return res.status(442).json({error:"Please add both Email and Password"})
    }
    User.findOne({Username:Username})
    .then(savedUser=>{
        if(!savedUser){
            console.log("username is scuffed")
            return res.status(442).json({error:"Please add both Email and Password"})
        }
        bcrypt.compare(Password,savedUser.Password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }
            else{
                console.log("pass is scuffed")
                return res.status(442).json({error:"Please add both Email and Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


// Route to activate the user's account
router.put('/verify/:token', (req, res) => {
    console.log("putting");
    User.findOne({ temporarytoken: req.params.token }, (err, user) => {
        if (err) throw err; // Throw error if cannot login
        const token = req.params.token; // Save the token from URL for verification
        console.log("the token is", token);
        // Function to verify the user's token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.json({ success: false, message: "Activation link has expired." }); // Token is expired
            } else if (!user) {
                res.json({ success: false, message: "Activation link has expired." }); // Token may be valid but does not match any user in the database
            } else {
                user.temporarytoken = false; // Remove temporary token
                user.active = true; // Change account status to Activated
                // Mongoose Method to save user into the database
                user.save(err => {
                    if (err) {
                        console.log(err); // If unable to save user, log error info to console/terminal
                    } else {
                        // If save succeeds, create e-mail object
                        sgMail.setApiKey(SENDGRID_KEY)
                        console.log("creating email");
                        const msg = {
                            to: user.Email, // Change to your recipient
                            from: 'jgwynn@knights.ucf.edu', // Change to your verified sender
                            subject: 'Sending with SendGrid is Fun',
                            text: `Hello ${user.FirstName}, Your account has been successfully activated!`,
                            //html: `Hello<strong> ${Users.FirstName}</strong>,<br><br> Click Here to Activate your Account or don't I am not your mom`,
                            html: `Hello<strong> ${user.FirstName},</strong>,<br><br>Your account has been successfully activated!`,
                        }
                        // Send e-mail object to user
                        console.log("sending email");
                        sgMail.send(msg)
                        .then(() => {
                            console.log('Email sent')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                        res.json({
                            succeed: true,
                            message: "User has been successfully activated9875343"
                        });
                    }
                });
            }
        });
    });
});



module.exports = router;
