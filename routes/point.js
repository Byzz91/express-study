const express = require('express')
const router = express.Router()

router.put('/add/:point', (req, res) => {
  res.send(`This add point is ${req.params.point}`)
})

module.exports = router