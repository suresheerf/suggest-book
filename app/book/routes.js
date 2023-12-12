import {Router} from 'express';
import { createOne } from './controller.js';

const router = new Router();

router.route('/').post(createOne)

export default router;