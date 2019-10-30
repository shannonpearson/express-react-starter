const { Router } = require('express');

const User = require('../../db/models/user');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findByLogin(username);
    res.status(200).send(user);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
