import {Router} from 'express' ;
import * as Authcontroller from './auth.controller.js';
const router=Router();

router.get('/',Authcontroller.getAuth);
router.post('/register',Authcontroller.register);
router.post('/login',Authcontroller.login);
router.patch('/:id',Authcontroller.update);
router.delete('/:id',Authcontroller.destroy);

export default router;