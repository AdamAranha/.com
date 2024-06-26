const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const multer = require('multer')
const cors = require('cors')
const XLSX = require('xlsx')

const upload = multer()

app.use(cors())

app.post('/testPost', upload.single('file'), (req, res)=>{
    console.log('Hit')
    const workbook = XLSX.read(req.file.buffer, {cellText:false, cellDates:true})
    const worksheet = workbook.Sheets['Sheet1']
    const extract = XLSX.utils.sheet_to_json(worksheet, {header: "A", raw: false, dateNF:'yyyymmdd'})
    res.status(200).send(extract)
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})