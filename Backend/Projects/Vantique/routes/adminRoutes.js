const express = require('express')
const cors = require('cors')
const router = express.Router()
const path = require('path')

//Paths

const AdminControllerPath = path.join(__dirname, '..', 'controllers', 'adminController.js')

//Controllers

const {
    adminRoot, 
    getAllUsers, getUserById, deleteUserById, changeUserRoleById,
    getAllBags, getBagById, createBag, updateBagById, deleteBagById

} = require(AdminControllerPath)

//Routes

router.get('/', adminRoot)

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleteUserById)
router.put('/users/:id', changeUserRoleById)

router.get('/bags', getAllBags)
router.get('/bags/:id', getBagById)
router.post('/bags', createBag)
router.put('/bags/:id', updateBagById)
router.delete('/bags/:id', deleteBagById)

module.exports = router