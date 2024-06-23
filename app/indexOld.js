const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const path = require('path')

const cors = require('cors')
const bodyParser = require('body-parser')

// const STATIC_PATH = process.NODE.ENV === 'production' ? path.join(__dirname, '../public_html') : path.join(__dirname, '../client/dist')

const mysql = require('mysql2')

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())

app.get('/test', (req, res) => {
    res.send({message: 'Working Again'})
})

app.get('/budgettracker/pull', (req, res) => {
    res.send({message: '/budgettracker/pull hit'})
})

app.post('/budgettracker/push', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
app.use(express.static(path.join(__dirname, '../public_html')))


app.get('/*', (req, res) => {                       
    res.sendFile(path.join(__dirname, '../public_html','index.html'));                               
  });


app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`) 
})