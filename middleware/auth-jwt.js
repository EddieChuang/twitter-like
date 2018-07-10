const express = require('express')
const secretConfig = require('../config/secret')
const jwt = require('jsonwebtoken')
let authJWT = express.Router()

authJWT.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.header.token
  if (token) {
    jwt.verify(token, secretConfig.secret, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Unauthenticated token' })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided'
    })
  }
})

export default authJWT
