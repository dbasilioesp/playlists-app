import { Router } from 'express';
import { needAuthentication } from '../../middlewares/accessChecks.js';
import * as controllers from './controllers.js';
/**
 * Contains all API routes for the application.
 */
const router = Router();

router.post('/', controllers.create);
router.get('/me', needAuthentication, controllers.me);

export default router;
