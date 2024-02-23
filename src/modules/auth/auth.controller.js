import usermodel from "../../../DB/model/user.model.js";

export const getAuth=(req,res)=>{
    return res.json({massage:"Auth"});
}

export const register= async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user=await usermodel.create({name,email,password});
        return res.json({massage:"success", user});

    }
    catch(error){
        if(error.original?.error==1062){
            return res.json({massage:"email alreagy exsit"});

        }
        return res.json({massage:"error",error:error.stack});
    }
}


export const login=async(req,res)=>{
    const {name,email,password}=req.body;
    const checkuser=await usermodel.findAll({
        attributes:[
            "id","name"
        ],
        where:{
            email,
            password
        }
    });

    if(!checkuser.length){
        return res.json({massage:"eamil or password is wrong"});
    }

    return res.json({masseage:"success",user:checkuser});
}


export const update=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name}=req.body;
        const user= await usermodel.update({name},{where:{id}});
        if(!user){
            return res.json({massage:"user not found"});

        } 
        return res.json({massage:"success",user:user});

    }
    catch(error){
        return res.json({massage:"error",error:error.stack});
    }
}

export const destroy=async(req,res)=>{
    const {id}=req.params;
    const user=await usermodel.destroy({
        where:{
            id
        }
    });
    if(!user){
        return res.json({massage:"user not found"});
 
   }
   return res.json({massage:"success",user});
}
