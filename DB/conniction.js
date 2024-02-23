import { Sequelize } from 'sequelize';

 export const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export const connectDB=async()=>{
    
    try{
        return await sequelize.sync({alter:true});

    }
    catch(error){
        console.log("error DB");
    }
  }