const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const path = require('path')

app.use(express.static(path.join(__dirname, '../public', 'public_html')));

app.get('/test', (req, res) => {
    res.status(200).send({message: 'Nice Work'})
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`) 
})