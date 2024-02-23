import {Router} from 'express';
import * as blogcontroller from './blog.controller.js';
const router= Router();

router.get('/',blogcontroller.getblog );
router.post('/',blogcontroller.addblog);

export default router;