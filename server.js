const express = require('express');
//const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
  res.write('index.html');
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
