const express = require('express')
const cors = require('cors')
const employeeRouter = require('./Routes/employeeRoutes')
const freelancerRoutes = require('./Routes/freelancerRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/employee',employeeRouter)
app.use('/freelancer',freelancerRoutes)

app.listen(3001, () => {
  console.log(`listening on port 3001`)
})