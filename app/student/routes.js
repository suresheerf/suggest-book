import {Router} from 'express';
import { createOne } from './controller';

const router = new Router();

router.route('/').post(createOne)