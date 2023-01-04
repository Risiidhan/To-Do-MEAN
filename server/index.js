require('dotenv').config()
const connection = require('./model/index')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const taskRoute = require('./routes/taskRoutes')


const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))



app.listen(process.env._PORT, ()=>{
    console.log('server runnning');
})

app.use(express.json())

app.use('/task',taskRoute)

