const express = require('express');
const verifyToken = require('../Helpers/verifytoken')
const jwt = require('jsonwebtoken');
const config = require('../config');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const user = require("../Models/User")
const router = express.Router()




router.use(bodyParser())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))


router.use(verifyToken)

router.post('/', (req, res) => {



    const username = req.user.userName

    const re1 = user.find({ userName: username }).then((updatedDoc1) => {

        res.send({ typeofuser: updatedDoc1[0].typeofuser, userName: username });
    }).catch(err => console.log(err))


});
module.exports = router
