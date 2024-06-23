const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const path = require('path')

const cors = require('cors')

const mysql = require('mysql2')
// const { Sequelize } = require('sequelize');
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '../public_html')))


const pool = mysql.createPool({
    host: '104.152.168.44',
    user: 'adamaran_powerUser',
    database: 'adamaran_testDb',
    password: '3Ardiadcm',
    // gCmNL0W%y[bT
    port: 3306
})

pool.getConnection((err, connection) => {
    if(err instanceof Error) {
        console.log(err)
        return
    }
    connection.release()
})

app.get('/test', (req, res) => {
    res.send({message: 'Registering New'})
})

app.get('/budgettracker/pull', (req, res) => {
    pool.query('SELECT * FROM Users', (err, rows, fields) => {
        if(err instanceof Error) {
            console.log(err)
            return
        }
        // console.log(rows)
        // console.log(fields)
        res.send(rows)
    })
})

app.post('/budgettracker/push', (req, res) => {
    // console.log(req.body)
    const {username, password} = req.body
    pool.query('INSERT INTO Users (Username, Password) VALUES (?, ?)', [username, password], (err, rows) => {
        res.send(rows)
    })
})

app.get('/*', (req, res) => {                       
    res.sendFile(path.join(__dirname, '../public_html','index.html'));                               
  });


app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`) 
})