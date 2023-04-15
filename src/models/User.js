const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.TEXT,
    },
    age: {
      type: DataTypes.FLOAT,
    },

    privileges: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.TEXT,
      defaultValue:
        "https://www.nicepng.com/png/detail/218-2180093_imagens-de-karate-png.png",
    },
    phone: {
      type: DataTypes.STRING,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    kyu:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    dan: {
      type: DataTypes.INTEGER,
      default: null
    }
  });
};
