const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const routingApi = require('./routes/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const whitelist = ['*'];
//Seting the cors configurations
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
  optionsSuccessStatus: 200,
};
//before anything to be able to read JSON req through operations
app.use(express.json());
app.use(cors())
routingApi(app);
app.use(cors(corsOptions));
// error middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// port
app.listen(port, () => {
  console.log('Get to work -> http://localhost:' + port + '/api/');
});
