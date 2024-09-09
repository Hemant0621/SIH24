const express = require('express');
const { jwtsecret } = require('../config.js');
const Routes = express.Router();
const zod = require('zod');
const { employee_user, Job } = require('../model/index')
const JWT = require('jsonwebtoken')
const authMiddleware = require('../middleware.js')

const signupBody = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string()
})

Routes.post('/auth/signup', async (req, res) => {

    try {
        const body = req.body;
        console.log(body)

        const { success } = signupBody.safeParse(body)

        if (!success) {
            return res.send({
                message: "incorrect inputs"
            })
        }

        const find = await employee_user.findOne({
            username: body.username
        })

        if (find) {
            return res.send({
                message: "email already register"
            })
        }

        const user = await employee_user.create({
            username: body.username,
            email: body.email,
            password: body.password
        })

        const userId = user._id;

        const token = JWT.sign({ userId }, jwtsecret)
        return res.send({
            token: token,
            username: body.username
        })
    } catch (e) {
        return res.send({
            message: e
        })
    }
})


const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

Routes.post('/auth/signin', async (req, res) => {

    try {
        const body = req.body;

        const { success } = signinBody.safeParse(body)

        if (!success) {
            return res.send({
                message: "incorrect inputs"
            })
        }

        const user = await employee_user.findOne({
            email: body.email,
            password: body.password
        })

        if (!user) {
            return res.send({
                message: "incorrect email/password"
            })
        }

        const userId = user._id;

        const token = JWT.sign({ userId }, jwtsecret)
        return res.send({
            token: token,
            username: user.username
        })

    } catch (e) {
        return res.send({
            message: e
        })
    }
})

const JobBody = zod.object({
    title:zod.string(),
    price : zod.number(),
    description : zod.string()

})

Routes.post('/post_job', authMiddleware, async (req, res) => {
    try {
        const body = req.body;
        console.log(body)

        const { success } = JobBody.safeParse(body)
        
        if (!success) {
            return res.send({
                message: "incorrect inputs"
            })
        }

        const Job = await Job.create({
            title: body.title,
            price: body.price,
            description: body.description
        })

        return res.send({Job})
    } catch (e) {
        return res.send({
            message: e
        })
    }
})

module.exports = Routes