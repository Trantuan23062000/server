const { Sequelize } = require('sequelize');



// Initialize Sequelize with database connection
const sequelize = new Sequelize('bc6wqej7j5vddox6ydye', 'ucyv9djgtvmxxp8y', 'fy90RhaB0IBtmO4pMItn', {
  host: 'bc6wqej7j5vddox6ydye-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  port: 3306, // Thay bằng port của bạn nếu khác 3306
  logging: false // Đặt true để bật log chi tiết các truy vấn
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
// Call the function to test the connection
export default testConnection
