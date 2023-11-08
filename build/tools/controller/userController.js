const { request } = require("express");
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")



const createToken = (_id) => {
    const jwtKey = process.env.JWT_SECRET_KEY;
    
    return jwt.sign({_id}, jwtKey, {expiresIn: "30d"})
};



const registerUser = async(req, res) => {
    try{

        const {tag, email, password, token } = req.body;

        let eCheckTag = await userModel.findOne({tag})
        let eCheckEmail = await userModel.findOne({email})

        if(eCheckTag)
            return res.status(400).json('Name is Already Taken')

        if(eCheckEmail)
            return res.status(400).json('Email is Already Taken')

        if(!tag || !email || !password || !token)
            return res.status(400).json('Some Values are missing')

        if(!validator.isEmail(email))
            return res.status(400).json('this is not a valid email')

        if(password.length <= 3)
            return res.status(400).json('your password has to be atleast 3 chars')

        if(token != process.env.LOGTOKEN)
            return res.status(400).json('wrong entry token')

        const bio = "No Bio Yet";
        const pfp = "https://i.ibb.co/m8bCySY/83bc8b88cf6bc4b4e04d153a418cde62.jpg";
        user = new userModel({tag, email, password, bio, pfp})
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        const logToken = createToken(user._id)
        res.status(200).json({_id: user._id, tag, email,  bio, pfp,logToken})
    } catch (e) {
        console.log(e)
    }
}

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        let user = await userModel.findOne({email}); //check for user 

        if(!user)
            return res.status(400).json("no user with this email was found");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword)
            return res.status(400).json("Wrong Password");


        const token = createToken(user._id)
        res.status(200).json({_id: user._id, tag: user.tag, email, bio: user.bio, pfp: user.pfp, token})
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    registerUser,
    loginUser,
}