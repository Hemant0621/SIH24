const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://hemantkumar2335h:Hemant12@mydata.wprhwlz.mongodb.net/SIH24')

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const JobSchema = new mongoose.Schema({
    title : String,
    price : Number,
    description : String
})

const employee_user = mongoose.model('employee_user',userSchema)
const freelancer_user = mongoose.model('freelancer_user',userSchema)
const Job = mongoose.model('Job',JobSchema)


if(mongoose.STATES[mongoose.connection.readyState]){
    console.log("connected to database")
}

module.exports = {
    employee_user,
    freelancer_user,
    Job
}