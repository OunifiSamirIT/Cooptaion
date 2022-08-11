const express = require('express');
const { AddUser, FindAllCandidat, FindSinglUser, UpdateUser, DeleteUser } = require('../controllers/candidat.controller');
const router = express.Router()


/* add user */
router.post('/users', AddUser)

/* find all users */
router.get('/users', FindAllCandidat)

/* find single user */
router.get('/users/:id', FindSinglUser)

/* add user */
router.put('/users/:id', UpdateUser)

/* add user */
router.delete('/users/:id', DeleteUser)

module.exports = router;