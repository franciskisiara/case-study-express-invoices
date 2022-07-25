const sequelize = require("../database/connection");
require("../src/models/user")(sequelize);

exports.migrate = () => {
  return async function () {
    await sequelize.sync({ force: true });
  }
}

exports.rollback = () => {
  return async function () {
    return await sequelize.drop();
  }
}