import { sequelize } from "../conniction.js";
import { DataTypes } from 'sequelize';

const blogmodel= sequelize.define('Blog',{

    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
},
    {
        timestamps:true,

    
});

export default blogmodel;