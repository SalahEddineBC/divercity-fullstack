const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;
app.get("/data", function (req, res) {
    return res.json({ data: faker.database.type() });
})
app.get('/version',function(req,res){
    return res.json({ data: faker.vehicle.vin()});
})
app.listen(port,function(){
    console.log("Service one running on port: "+port);
})