import blogmodel from "../../../DB/model/blog.model.js";
import usermodel from "../../../DB/model/user.model.js";

export const getUser= async (req,res)=>{
    try{
        const users=await usermodel.findAll({
            include:blogmodel
        });
        return res.json({massage:"user",users});
    }
    catch(error){
        return res.json({massage:"error", error});
    }
    }
   