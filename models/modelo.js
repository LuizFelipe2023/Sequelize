import {DataTypes} from "sequelize";
import sequelize from "../banco/db.js";

const Livro = sequelize.define('Livro',{
      nome:{
         type: DataTypes.STRING,
         allowNull: false,
         required: true
      },
      autor:{
         type: DataTypes.STRING,
         allowNull: false,
         required: true
      },
});

export default Livro;

