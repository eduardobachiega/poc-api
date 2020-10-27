const express = require('express')
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})