const express = require('express');

const app = express();

console.log(app);

app.get('/',(req,res)=>{
   // res.write("Hello world");
    res.send({hi : 'there'});
})

app.listen(5000);