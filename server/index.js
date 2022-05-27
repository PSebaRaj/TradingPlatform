import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import stockRoutes from "./routes/stocks.js";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/portfolio", stockRoutes);

const CONNECTION_URL =
  "mongodb+srv://psebaraj:bingbong@cluster0.uq1cx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // PUT THIS IN DOT ENV BEFORE PUSHING TO GITHUB
const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
