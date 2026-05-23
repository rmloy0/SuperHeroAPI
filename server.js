/* ***********************
 * Require Statements
 *************************/

const express = require('express');
const app = express();
require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3000;
const connectDB = require('./database/');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Z-Key',
    ],
  }),
);

app.use(express.json());

app.use('/', routes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

connectDB.initDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
});
