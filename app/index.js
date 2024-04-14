const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const XLSX = require('xlsx')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const mysql = require('mysql2')
const budgetTracker = require('./routes/budgetTracker')
//////////////////////////////////////////////////////////////////////////
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer(
    // {storage}
    )
// create the connection to database
const connection = mysql.createConnection({
    host: '104.152.168.44',
    user: 'adamaran_powerUser',
    database: 'adamaran_testDb',
    password: '3Ardiadcm',
    port: 3306
  });

  app.use('/budgetTracker', budgetTracker)

  connection.connect((err) => {
    if(err) {
        console.log(err)
    }
    console.log('MySql Connected!')
  })

  connection.execute(
    'CREATE TABLE IF NOT EXISTS Users ( ID int NOT NULL AUTO_INCREMENT, Username VARCHAR(255), Password VARCHAR(255), PRIMARY KEY (ID))',
    (err, results, fields) => {
        // console.log(err)
        console.log(results)
        // console.log(fields)
    }
  )
//////////////////////////////////////////////////////////////////////////
// const workbook = XLSX.readFile('pcbanking.xlsx')
app.use(cors(
//     {
//     credentials: true,
//     origin: 'http://localhost:5173'
// }
));

// app.use(express.json())
app.get('*', function(request, response) {
    response.sendFile(__dirname + '../public_html/index.html');
  });

app.post('/testPost', upload.single('file'), (req, res)=>{
    const workbook = XLSX.read(req.file.buffer, {cellText:false, cellDates:true})
    const worksheet = workbook.Sheets['Sheet1']
    const extract = XLSX.utils.sheet_to_json(worksheet, {header: "A", raw: false, dateNF:'yyyymmdd'})
    res.status(200).send(extract)
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`) 
})