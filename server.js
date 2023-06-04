const express = require('express')
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 3300
const app = express()

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`runing on port ${port}`)
})