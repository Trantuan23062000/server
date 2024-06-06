require("dotenv").config()
const configCors = (app) => {
  app.use(function(req, res, next) {
      const portUrl = process.env.PORT_URL;

      if (!portUrl) {
          console.error("PORT_URL is not defined in environment variables.");
          res.status(500).json({ error: "Internal Server Error - Missing PORT_URL" });
          return;
      }

      res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
      res.setHeader("Access-Control-Allow-Origin", portUrl);
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
  });
};

export default configCors;
