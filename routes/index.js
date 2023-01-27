const express = require('express');

const vehicleRouter = require('./vehicle.router');
const homeRouter = require('./home.router');
//router
function routerApi(app) {
  //We set a router using express.Router()
  const router = express.Router();
  app.use('/api/', router);
  router.use('/', homeRouter);
  router.use('/vehicles', vehicleRouter);
}

module.exports = routerApi;
