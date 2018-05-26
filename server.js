"use strict"
require('babel-core/register')

const express    = require('express')
const morgan     = require('morgan')
const bodyParser = require('body-parser')
// const mongoose   = require('mongoose')
const path       = require('path')
// const config     = require('./config/secret')
const httpProxy  = require('http-proxy')

const app = express();
const apiProxy = new httpProxy.createProxyServer({
  target: 'http://localhost:3031'
})
app.use('/api', (req, res) => {
  apiProxy.web(req, res)
})


app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



app.listen(3030, (err) => {
    if(err)
        console.log(err)
    console.log('Server is listening on port 3030 ...');
});