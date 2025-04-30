require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.end('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});