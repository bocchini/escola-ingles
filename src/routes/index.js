const bodyParser = require('body-parser');
const pessoasRouter = require('./pessoasRoute');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(pessoasRouter);
  app.get('/', (req,res) => res.status(200).send('Olá'));
}