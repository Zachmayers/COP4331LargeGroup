const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
// const {JWT_SECRET} = require('../keys')
// const {SENDGRID_KEY} = require('../keys')
const auth = require('../middleware/auth')
const sgMail = require('@sendgrid/mail')

router.get('/protected',auth,(req,res)=>{
    res.send("hello user")
})

// @route POST /Signup
// @desc Signup a new user
// @res not set in stone. Currently: {succeed, msg}
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
                // temporarytoken: jwt.sign(Username, JWT_SECRET)
                temporarytoken: jwt.sign(Username, process.env.JWT_SECRET)
            })
            //Users.save(function(err,newUser){
            //    console.log(newUser.id);
            //})
            console.log("about to save")
            Users.save()
            .then(user=>{
                console.log("saved successfully")
                //res.send({msg:"saved successfully"})
                console.log(user.id)
                // sgMail.setApiKey(SENDGRID_KEY)
                sgMail.setApiKey(process.env.SENDGRID_KEY)
                const hrefLink = "https://listenin.us/verify/" + Users.temporarytoken;
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
                    success: true,
                    msg: "User has been successfully activated"
                });
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
})

// @route POST /login
// @desc Login an existing user
// @res {token, user{id,name,email}}
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
        if(savedUser.active == false){
            console.log("user not verified")
            return res.status(442).json({error:"the user is not verified"})
        }
        //console.log(Password + "  saved   " + savedUser.Password)
        bcrypt.compare(Password,savedUser.Password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({msg:"successfully signed in"})
                const token = jwt.sign(
                    {_id:savedUser._id},
                    // JWT_SECRET,
                    process.env.JWT_SECRET,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: savedUser._id,
                                name: savedUser.FirstName,
                                email: savedUser.Email
                            }
                        })
                    }
                )
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


// @route PUT /verify/{JWT}
// @desc activate the user's account
router.put('/verify', (req, res) => {
    console.log("putting");
    User.findOne({ temporarytoken: req.body.token }, (err, user) => {
        if (err) throw err; // Throw error if cannot login
        const token = req.body.token; // Save the token from URL for verification
        console.log("the token is", token);
        // Function to verify the user's token
        // jwt.verify(token, JWT_SECRET, (err, decoded) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                res.status(442).json({ error: "Activation link has expired." }); // Token is expired
            } else if (!user) {
                res.status(442).json({ error: "Activation link has expired.2" }); // Token may be valid but does not match any user in the database
            } else {
                user.temporarytoken = false; // Remove temporary token
                user.active = true; // Change account status to Activated
                // Mongoose Method to save user into the database
                user.save(err => {
                    if (err) {
                        console.log(err); // If unable to save user, log error info to console/terminal
                    } else {
                        // If save succeeds, create e-mail object
                        // sgMail.setApiKey(SENDGRID_KEY)
                        sgMail.setApiKey(process.env.SENDGRID_KEY)
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
                            success: true,
                            msg: "User has been successfully activated9875343"
                        });
                    }
                });
            }
        });
    });
});


// @route POST /resetpassword
// @desc when called it will take users email and send them a link to reset password
router.post('/resetpassword', (req, res) => {
    console.log("preping reset");
    const {Email} = req.body
    if(!Email){
        console.log("something is missing")
        return res.status(442).json({error:"Please add Email"})
    }
    User.findOne({ Email: Email }, (err, user) => {
        console.log(user);
        if (err) throw err; // Throw error if no valid user
        if(!user){
            return res.status(442).json({error:"User dont exists with that email"});
        }
        console.log("signing token");
        // const newToken = jwt.sign(Email,JWT_SECRET);
        const newToken = jwt.sign(Email,process.env.JWT_SECRET);
        user.temporarytoken = newToken;
        console.log(user.temporary);
        console.log(user);
        user.save(err => {
            if (err) {
                console.log(err); // If unable to save user, log error info to console/terminal
            } else {
                // If save succeeds, create e-mail object
                // sgMail.setApiKey(SENDGRID_KEY)
                sgMail.setApiKey(process.env.SENDGRID_KEY)
                console.log("creating email");
                const hrefLink = "https://listenin.us/reset/" + user.temporarytoken;
                const msg = {
                    to: Email, // Change to your recipient
                    from: 'jgwynn@knights.ucf.edu', // Change to your verified sender
                    subject: 'Listenin.us Reset Password',
                    text: `Hello ${user.FirstName}, Click Here to Reset your Password`,
                    html: `Hello<strong> ${user.FirstName}</strong>,<br><br><a href=${hrefLink}> Click Here to Reset your Password</a>`,
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
                    success: true,
                    msg: "User has been successfully requested reset"
                });
            }
        });
    });
})


// @route POST /newpassword
// @desc takes new pass and token and resets the password.
router.post('/newpassword', (req,res) => {
    const newPassword = req.body.Password
    console.log(newPassword + "this is new password")
    const resetToken = req.body.Token
    User.findOne({temporarytoken:resetToken})
    .then(user=>{
        if(!user){
            console.log(user)
            return res.status(442).json({error: 'something done broke'})
        }
        bcrypt.hash(newPassword,12)
        .then(hashedPassword=>{
            user.Password = hashedPassword
            user.temporarytoken = false
            user.save().then((saveduser)=>{
               res.json({ success: true,
                        message:"password updated success"})
           })
        })
    })
})

router.delete('/delete', (req,res) => {
    const {id} = req.body;
    if(!id){
        console.log("id is missing")
        return res.status(442).json({error:"ID is missing"})
    }
    User.deleteOne({_id: id}, function(err){
        if(err) console.log(err);
        res.json({
            //ID: user.id,
            success: true,
            msg: "User has been successfully deleted"
        });
    })
})

module.exports = router;
