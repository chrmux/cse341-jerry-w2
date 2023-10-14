const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/users', require('./users'));
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
