const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    "<h1>HOLIWIS</h1><a href='http://localhost:5000/api/vehicles'><h4>VEHICLES</h4></a>"
  );
});
module.exports = router;
