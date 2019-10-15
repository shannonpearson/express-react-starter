const { Router } = require('express');

const User = require('../../db/models/user');

const router = Router();

router.get('/', async (req, res) => {
  const { username } = req.params;
  const user = await User.findByLogin(username);
  res.send('Received get request for USER', user);
});

module.exports = router;
