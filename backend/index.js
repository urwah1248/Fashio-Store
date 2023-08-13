const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/router");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.URI)
  .then((res) => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const allowedOrigins = ["https://fashio-store.vercel.app"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => [
  console.log(`Server is running at https://localhost:${PORT}`),
]);
