const path = require('path')
const cookieParser = require('cookie-parser')
const express = require('express')
const router = express.Router()


// Paths


const AuthControllerPath = path.join(__dirname, '..', 'controllers', 'authController.js')

//Middleware

router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(cookieParser())

//Controllers
const {authRoot, authLogin, authSignup, authLogout} = require(AuthControllerPath)

// Routes

router.get('/', authRoot);
router.post('/login', authLogin);
router.post('/signup', authSignup);
router.get('/logout', authLogout);



module.exports = router