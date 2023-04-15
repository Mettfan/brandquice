const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Membership", {
    type: {
      type: DataTypes.STRING,
    },

    pay_date: {
      type: DataTypes.STRING,
    },
    pay_price: {
      type: DataTypes.STRING,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user: {
        type: DataTypes.STRING
    },
    sucursal: {
        type: DataTypes.STRING
    }

  });
};
