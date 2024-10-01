require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')

var cookieParser = require('cookie-parser')
const { router } = require("./router/user")

app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.use("/api/user",router)



const main =async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000)
    console.log("Database connected and listing on port 3000")
}
main()