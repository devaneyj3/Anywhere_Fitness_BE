var express = require('express');
var router = express.Router();
let db = require('../data/db_config')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const data = await db('people')
  console.log(data)
  if (data) {
    res.status(200).send(data)
  }
  else {
    res.status(404).send('no data found')
  }
});

router.post('/login', async function(req, res, next) {
  const { username, password } = req.body;
  const create = await db('people').where({username}).first()
  if (create) {
    res.status(201).send(create)
  }
  else {
    res.status(404).send('no data found')
  }
  });

router.get('/:id', async function(req, res, next) {
  const id = req.params.id
  const user = await db('people').where({id: id}).first()
  if (user) {
    res.status(200).send(user)
  }
  else {
    res.status(404).send('no data found')
  }
  });

module.exports = router;
