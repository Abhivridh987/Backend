const express = require('express')
const path = require('path')
const router = express.Router()
const fs = require('fs')

// Paths

const dataPath = path.join(path.dirname(__dirname), 'database', 'student.json')
const controllerPath = path.join(path.dirname(__dirname), 'controllers', 'db_controllers','db_controller.js' )

// Modules

const {viewDB, filtererrorDB, filterDB, insertDB, deleteDB, updateDB} = require(controllerPath);

//Middleware

// Routes

router.get('/',viewDB)

router.get('/filter',filtererrorDB)

router.get('/filter/:id', filterDB)

router.put('/',insertDB)

router.delete('/',deleteDB)

router.patch('/',updateDB)

module.exports = router
