const express = require('express')
const https = require('https')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/now', (req, res) => {
   let ts = Date.now();

   let date_ob = new Date(ts);
   let date = date_ob.getDate();
   let month = date_ob.getMonth() + 1;
   let year = date_ob.getFullYear();

   
   res.send(year + "-" + month + "-" + date);
})

app.get('/html', (req, res) => {
   res.send("<p> HTML TEST!!!</p>")
})

app.get('/dog', (req, res) => {
   const options = {
      'method': 'GET',
      'hostname': 'dog.ceo',
      'path': '/api/breeds/image/random'
    };

    var requisition = https.request(options, function (response) {
      var chunks = [];
    
      response.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      response.on("end", function (chunk) {
         var body = Buffer.concat(chunks);
         res.send(body.toString())
         console.log(body.toString());
      });
    
      response.on("error", function (error) {
        console.error(error);
      });
    });
    
    requisition.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})