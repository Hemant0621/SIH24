const express = require('express');
const {jwtsecret}  = require('../config.js');
const Routes = express.Router();
const zod = require('zod');
const {freelancer_user } = require('../model/index')
const JWT = require('jsonwebtoken')

const signupBody = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string()
})

Routes.post('/auth/signup',async (req,res)=>{
    
    try {
        const body = req.body;
    
        const {success} = signupBody.safeParse(body)
    
        if(!success){
            return res.send({
                message : "incorrect inputs"
            })
        }

        const find = await freelancer_user.findOne({
            email : body.email
        })

        if(find){
            return res.send({
                message : "email already register"
            })
        }

        const user = await freelancer_user.create({
            username : body.username,
            email : body.email,
            password : body.password
        })
        
        const userId = user._id;
    
        const token = JWT.sign({userId},jwtsecret)
        return res.send({
            token : token,
            username : body.username
        })
    } catch (e) {
        return res.send({
            message : e
        })
    }
})


const signinBody = zod.object({
    email : zod.string().email(),
    password : zod.string()
})

Routes.post('/auth/signin',async (req,res)=>{
    
    try {
        const body = req.body;
    
        const {success} = signinBody.safeParse(body)
    
        if(!success){
            return res.send({
                message : "incorrect inputs"
            })
        }

        const user = await freelancer_user.findOne({
            email : body.email,
            password : body.password
        })

        if(!user){
            return res.send({
                message : "incorrect email/password"
            })
        }

        const userId = user._id;
    
        const token = JWT.sign({userId},jwtsecret)
        return res.send({
            token : token,
            username : user.username
        })

    } catch (e) {
        return res.send({
            message : e
        })
    }
})

module.exports = Routes