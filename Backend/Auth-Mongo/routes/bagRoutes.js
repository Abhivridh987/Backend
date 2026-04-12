const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')

//Paths

const BagControllerPath = path.join(__dirname, '..', 'controllers', 'bagController.js')

// Controllers

const {bagRoot, getAllBags, getBagById, getBagByNameBrandModel, searchBags, filterBags} = require(BagControllerPath)


router.get('/', bagRoot)
router.get('/bags', getAllBags)
router.get('/bags/search/filter/', filterBags)
router.get('/bags/search/', searchBags)
router.get('/bags/:id', getBagById)
router.get('/bags/:name/:brand/:model_no', getBagByNameBrandModel)



module.exports = router