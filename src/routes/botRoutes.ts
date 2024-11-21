import { Router } from 'express';
import { handleMessage, handleCommand } from '../controllers/botController';

const router = Router();

router.post('/message', handleMessage);
router.post('/command', handleCommand);

export default router;