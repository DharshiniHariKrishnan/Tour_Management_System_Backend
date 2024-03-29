import mongoose from "mongoose";

const travel_itinerarySchema = new mongoose.Schema({
  from_place: { type: String, required: true },
  departure_date: { type: String, required: true },
  return_date: { type: String, required: true },
  num_travelers: { type: Number, required: true },
  uid: { type: String, required: false },
  uid_user: { type: String, required: false },
});

export default mongoose.model("travel_itinerary", travel_itinerarySchema);
