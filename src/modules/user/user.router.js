import {Router} from 'express';
import * as usercontroller from './user.controller.js';
const router= Router();

router.get('/',usercontroller.getUser);
export default router;
