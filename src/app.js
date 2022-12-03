const { request, response } = require('express');
const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send('Formação Node.js!');

})

//Port=3000

app.listen(3000);