const express = require("express")
const router = express.Router()

router.get('/submit', (req, res) => {
    res.send({payload: "Reached"})
})

module.exports = router