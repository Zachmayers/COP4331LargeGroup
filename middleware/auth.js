const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

function auth(req,res,next) {
	const {authorization} = req.headers
	//authorization will look basically like: "Bearer lkasdjflkjsadflkj"

	//checks for token
	if(!authorization){
		return res.status(401).json({msg: "not authorized"})
	}

	const token = authorization.replace("Bearer ", "")
	jwt.verify(token,JWT_SECRET,(err,payload)=>{
		if(err){
			return res.status(401).json({error: "not authorized"})
		}

		const {_id} = payload
		User.findById(_id).then(userdata=>{
			req.user = userdata
		})
		next()
	})
}
module.exports = auth;
