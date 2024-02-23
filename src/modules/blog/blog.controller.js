import blogmodel from "../../../DB/model/blog.model.js";
import usermodel from "../../../DB/model/user.model.js";

export const getblog= async (req,res)=>{
    try{
        const blogs=await blogmodel.findAll({
            include:{
                model:usermodel,
                attributes:['id','name']
            }
        });
        return res.json({massage:"blog",blogs});
    } catch(error){
        return res.json({massage:"error", error});
    }
}

export const addblog= async(req,res)=>{
    try{
        const {title,body,UserId}=req.body;
        const blogs= await blogmodel.create({title,body,UserId});
        return res.json({massage:'success'});

    } 
    catch(error){
        console.error('Error adding blog:', error);
        return res.json({massage:'error',error:error.massage});
    }
}
