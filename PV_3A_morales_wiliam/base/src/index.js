/// inportar y arrancar express
const express=require("express");

const app = express();
// cas
app.listen (3000, function (){
    console.log('hola mundo')
})

// cam
app.get('/blog', function(req, res) {
    return res.json({ mensajes: "saludos desde el blog"})
  })
  