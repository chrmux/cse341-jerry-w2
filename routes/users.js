const express = require('express')
const router = express.Router()

const userRouter = require('../controllers/users');



router.get('/', userRouter.findAll);
router.post('/', userRouter.createUser);
router.put('/:id', userRouter.updateUser);
router.delete('/:id', userRouter.deleteUser);

module.exports = router 