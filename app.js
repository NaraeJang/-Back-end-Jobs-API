require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// extract security packages
const helmet = require("helmet"); // library that prevents numerous possible attacks by creating massive http headers.
const cors = require("cors"); // (Cross Origin Resource Sharing) : to ensure our API is accessible from different domains.
const xss = require("xss-clean"); // Sanitizes the user input in req.body, req.query and req.params. Protects us from cross scripting attacks where the attacker tries to inject some malicious code.
const rateLimiter = require("express-rate-limit"); // limit the amount of requests the user can make.

// connectDB
const connectDB = require("./db/connect");
const authMiddleware = require("./middleware/authentication");
// routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// invoke security packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs.
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authMiddleware, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
