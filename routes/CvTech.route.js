const express = require('express');
const {  AddCVTCH,FindAllAddCVTCH } = require('../controllers/cvtech.controller');
const router = express.Router()


/* add user */
router.post('/cvtech', AddCVTCH)

/* find all users */
router.get('/cvtech', FindAllAddCVTCH)

module.exports = router;