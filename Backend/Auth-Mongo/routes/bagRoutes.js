const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')

//Paths

const BagControllerPath = path.join(__dirname, '..', 'controllers', 'bagController.js')

// Controllers

const {bagRoot, getAllBags} = require(BagControllerPath)


router.get('/', bagRoot)
router.get('/bags', getAllBags)

module.exports = router