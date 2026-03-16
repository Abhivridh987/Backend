const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()


const bcrypt = require('bcrypt')
const saltRounds = 10

//Paths

bcryptControllerPath = path.join(__dirname, '..', 'controllers', 'bcryptControllers.js')

//Controllers

const { bcryptRoot, bcryptSign, bcryptLogin } = require(bcryptControllerPath)

//Routes
router.get('/', bcryptRoot)

router.post('/sign', bcryptSign)

router.post('/login', bcryptLogin)

module.exports = router
