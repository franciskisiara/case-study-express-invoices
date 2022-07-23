const { Sequelize } = require('sequelize');

const connect = (config = {}) => {
  if (typeof config !== 'object' || config === null ) {
    throw new Error('Invalid db env provided');
  }

  const testing = config.test || false;
  const dbSuffix = testing ? '_test' : '';

  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `./invoice${dbSuffix}.sqlite`
  });

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.log('Unable to connect to the database: ', error);
  })

  return sequelize
}

module.exports = connect;



/**
 * Notes
 * 
 * - In a real application, I would leverage a .env 
 *   file to determine the database to connect to.
 */
