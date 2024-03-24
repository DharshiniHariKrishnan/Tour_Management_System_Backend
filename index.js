import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// import cookieParser from "cookie-parser";
import searchRouter from "./routes/search.js";
import accRouter from "./routes/accommodations.js";
import placeRouter from "./routes/places.js";
import accIDRouter from "./routes/getAccomodationById.js";
import { v4 as uuidv4 } from "uuid";
import travelmodeRouter from "./routes/travelmode.js";
import getUserIt from "./routes/user_itinerary.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ['http://localhost:3000']; 

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

//connecting to database

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connected");
  } catch {
    console.log("Could not connect!");
  }
};

//middleware
app.use(express.json());
app.use(cors());
app.use("/search", searchRouter);
app.use("/search-accommodation", accRouter);
app.use("/search-place", placeRouter);
app.use("/get-accommodation-by-id", accIDRouter);
app.use("/search-mode", travelmodeRouter);
app.use("/api", getUserIt);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
