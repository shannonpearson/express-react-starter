import { Router } from 'express';

import User from '../../db/models/user';

const router = Router();

router.get('/', async (req, res) => {
  const { username } = req.params;
  const user = await User.findByLogin(username);
  res.send('Received get request for USER', user);
});

export default router;
