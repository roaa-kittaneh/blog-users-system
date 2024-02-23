import { Sequelize } from 'sequelize';

 export const sequelize = new Sequelize('freedb_blog-user', 'freedb_roaaa', '3fycRvbW?kfF9$M', {
    host: 'sql.freedb.tech',
    port: 3306,
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