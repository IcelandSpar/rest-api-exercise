require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const models = require('./models');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
})


app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method')
// });

// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method')
// });;

// app.put('/users/:userId', (req, res) => {
//   return res.send(`Received a PUT HTTP method on user ${req.params.userId}`)
// });

// app.delete('/users/:userId', (req, res) => {
//   return res.send(`Received a DELETE HTTP method on user ${req.params.userId}`)
// });





app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});