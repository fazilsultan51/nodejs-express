import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  city: String,
  state: String,
  country: String,
  status: String,
  postal_code: String,
});

const LocationModel = mongoose.connection.model("job_location", userSchema);

export default LocationModel;
