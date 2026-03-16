const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

//Paths

cookieControllerPath = path.join(__dirname, '..', 'controllers', 'cookieControllers.js')

//Controllers

const {cookieRoot, setCookie, getCookie} = require(cookieControllerPath)

//Routes

router.get('/', cookieRoot)
router.get('/setcookie', setCookie)

router.get('/getcookie', getCookie)

module.exports = router