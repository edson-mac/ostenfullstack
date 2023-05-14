const express = require('express');
const bodyParser = require('body-parser');
const { companiesRouter } = require(`./src/routes`);
const cors = require('cors');

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use('/companies', companiesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});