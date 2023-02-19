require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const {MONGO_URI, PORT}=process.env

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(routes)

mongoose.set({strictQuery:false})
mongoose.connect(MONGO_URI, ()=> {
    console.log("connected to db")
})

app.listen(3001, ()=>
{
    console.log("listening on port 3001")
})