const express = require('express');
const router = express.Router();
const companyData = require('../controllers/CompanyDataController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', companyData.getData)

module.exports = router;
