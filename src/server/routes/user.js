import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Received get request for USER'));

export default router;
