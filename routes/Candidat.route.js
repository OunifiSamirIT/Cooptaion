const express = require('express');
const { AddCandidat } = require('../controllers/Candidature');
const router = express.Router()



router.post('/Admin', AddCandidat)




module.exports = router;