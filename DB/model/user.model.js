import { sequelize } from "../conniction.js";
import { DataTypes } from 'sequelize';
import blogmodel from "./blog.model.js";
const usermodel= sequelize.define('User',{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    confirmemail:{
        type:DataTypes.STRING,
        defaultValue:false,
    },
},
    {
        timestamps:true,

    
});
usermodel.hasMany(blogmodel,{
    foreignKey:{
        name:'UserId',
        type: DataTypes.INTEGER,
    },
})

blogmodel.belongsTo(usermodel);
export default usermodel;
