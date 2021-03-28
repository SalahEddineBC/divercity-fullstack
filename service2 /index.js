const express = require('express');
const faker= require('faker');
const fetch = require('node-fetch');
const app = express();
const serviceOneLink= process.env.SERVICE_LINK || "http://localhost:3000";
const port=3001;

app.get('/linked-data',function(req,res){
    fetch(`${serviceOneLink}/data`)
    .then(resp=>resp.json())
    .then(resp=>res.json({data:faker.database.type(),linkedData:resp}));
})
app.listen(port,function(){
    console.log('Service 2 running on port: '+port );
})