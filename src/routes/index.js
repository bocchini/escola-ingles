const bodyParser = require('body-parser');

const pessoasRouter = require('./pessoasRoute');
const niveisRouter = require('./niveisRoute');
const turmasRouter = require('./turmasRoutes');
const matriculasRouter = require('./matriculasRoute');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(pessoasRouter);
  app.use(niveisRouter);
  app.use(turmasRouter);
  app.use(matriculasRouter);
  app.get('/', (req,res) => res.status(200).send('Olá'));
}