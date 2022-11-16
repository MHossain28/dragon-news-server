const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categoris = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News api running all ok')
  })
  
app.get('/categoris', (req, res) =>{
    res.send(categoris)
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })