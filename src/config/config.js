const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_ADDON_PORT,
    logging: false
  },
  test: {
    username: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_ADDON_PORT
  },
  production: {
    username: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_ADDON_PORT
  }
};
