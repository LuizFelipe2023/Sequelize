import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize('teste2',process.env.DB_USERNAME,process.env.DB_PASSWORD,{
      host: 'localhost',
      dialect: 'mysql'
});

try{
    (async ()=>{
        await sequelize.authenticate();
        console.log("Conexão Feita com sucesso");
    })();   
}catch(err){
       console.error("Erro ao conectar-se ao Banco de dados:",err);
}

export default sequelize;