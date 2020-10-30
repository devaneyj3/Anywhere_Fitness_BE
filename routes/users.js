var express = require('express');
var router = express.Router();
let db = require('../data/db_config')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = db('people')
  console.log(data)
  if (data) {
    res.status(200).send(data)
  }
  else {
    res.status(404).send('no data found')
  }
});

router.post('/create', function(req, res, next) {
  const create = db('people').insert(req.body)
  console.log(create)
  if (create) {
    res.status(201).send(create)
  }
  else {
    res.status(404).send('no data found')
  }
  });

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  const find = db('people').where({id: id})
  console.log(find)
  if (find) {
    res.status(200).send(find)
  }
  else {
    res.status(404).send('no data found')
  }
  });

module.exports = router;
