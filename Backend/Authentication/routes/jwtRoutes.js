const express = require('express')
const path  = require('path')

const router = express.Router()

//Paths

const jwtControllerPath = path.join(__dirname, '..','controllers', 'jwtControllers.js')

//Controllers

const {jwtRoot, jwtSign, jwtLoginStatus} = require(jwtControllerPath)

//Routes

router.get('/', jwtRoot)
router.post('/sign', jwtSign)
router.get('/loginstatus', jwtLoginStatus)

module.exports = router