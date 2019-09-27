

const express = require('express');
const router = express.Router()

router.use('/login', require('./login'))

router.use('/signup/', require('./signup'))
router.use('/getuser/', require('./getuser'))
// router.use('/insert/', require('./insert'))

// router.use('/view/', require('./view'))


module.exports = router