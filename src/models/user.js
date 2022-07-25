const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    account_type: {
      type: DataTypes.ENUM,
      values: ['architect', 'customer',],
      allowNull: false,
      defaultValue: 'customer',
    },
  }, {
    underscored: true
  });
};