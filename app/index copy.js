const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const path = require('path')

const XLSX = require('xlsx')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql2')
const { connect } = require('http2')

// app.use(express.static(path.resolve(__dirname, '../public_html','index.html')));

console.log(process.NODE_ENV == 'production' ? 'prod' : 'dev')

// const connection = mysql.createConnection({
//     host: '104.152.168.44',
//     user: 'adamaran_powerUser',
//     database: 'adamaran_testDb',
//     password: '3Ardiadcm',
//     port: 3306
// })

// connection.connect(err => {
//     if(err) {console.log(err)}
//     console.log('MySQL Connected!')
// })

const pool = mysql.createPool({
    host: '104.152.168.44',
    user: 'adamaranh_powerUser',
    database: 'adamaran_testDb',
    password: '3Ardiadcm',
    port: 3306
})

pool.getConnection((err, connection) => {
    if(err instanceof Error) {
        console.log(err)
        return
    }
    connection.release()
})

pool.query('SELECT * FROM Users', (err, rows, fields) => {
    if(err instanceof Error) {
        console.log(err)
        return
    }
    console.log(rows)
    console.log(fields)
}).then()

// async function getNotes() {
//     const rows = await pool.query('SELECT * FROM Users')
//     return rows
// }

// const result = await getNotes()
// console.log(result)

connection.execute(
    'CREATE TABLE IF NOT EXISTS Users ( ID int NOT NULL AUTO_INCREMENT, Username VARCHAR(255), Password VARCHAR(255), PRIMARY KEY (ID))',
    (err, results, fields) => {
        // console.log(err)
        // console.log(results)
        // console.log(fields)
    }
)
app.use(cors())
app.use(bodyParser.json())


app.get('/budgettracker/push', (req, res) => {
    // connection.execute(
    //     'SELECT * FROM Users',
    //     (err, results, fields) => {
    //         console.log(results)
    //     }
    // )
    console.log("hit")
    res.json({message: "Nice"})
})

app.post('/budgettracker/push', (req, res) => {
    // connection.execute(
    //     'INSERT INTO Users (Username, Password) VALUES ()',
    //     (err, results, fields) => {
    //         console.log
    //     }
    // )
    const {username, password} = req.body
    // console.log(username, password)
    connection.execute(
        `INSERT INTO Users (Username, Password) VALUES ('${username}', '${password}')`,
        (err, results, fields) => {
            console.log(err, results)
        }
    )
    res.send({message: '10-4 Big Fella'})

 })

app.get('/test', (req, res) => {
    // res.status(200).send({message: `${path.join(__dirname, '../public_html','index.html')}`})
    res.send({message: '10-4 Big Fella'})
})

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, '../public_html','index.html'));                               
  });

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`) 
})