import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: Number,
  address: String,
  resume: String,
  job_id: String,
  applied_date: String,
  experience: String,
  status: String,
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "job_location",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const ApplicantModel = mongoose.connection.model("job_applicants", userSchema);

export default ApplicantModel;
