const dotenv = require('dotenv');
dotenv.config();

const configCors = (app) => {
  app.use(function(req, res, next) {
    const allowedOrigins = [process.env.PORT_URL, 'http://localhost:3001']; // Thêm URL cần cho phép gọi API vào đây
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
};

export default configCors;
