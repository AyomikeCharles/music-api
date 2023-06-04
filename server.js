const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 3300
const app = express()
app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})