import express from "express";
import { getUserItinerary, sendItineraryEmail } from "../controllers/userItinerary.js";
import { submititinerary } from "../controllers/userItinerary.js";
const getUserIt = express.Router();

getUserIt.get("/getUserItinerary", getUserItinerary);
getUserIt.post("/sendItineraryEmail", sendItineraryEmail);
getUserIt.post("/submititinerary", submititinerary)
export default getUserIt;