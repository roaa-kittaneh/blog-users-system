import authRouter from './auth/auth.router.js'
import blogRouter from './blog/blog.router.js'
import userRouter from './user/user.router.js'
import {connectDB} from '../../DB/conniction.js'
import cors from 'cors';

export const initApp=(app,express)=>{
    connectDB();
    app.use(cors()); // عشان لما الفرونت يستخدمها يكون مسموحله يوصل للداتا 
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.json({massage:"wellcome"});
    })
    app.use('/user',userRouter);
    app.use('/blog',blogRouter);
    app.use('/auth', authRouter);
    app.use('*',(req,res)=>{
        return res.json({massage:"page not found"});
    })
}
