import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  user_id: String,
  job_id: String,
  applied_date: String,
  status: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const ApplicationModel = mongoose.connection.model(
  "job_applicantion",
  userSchema
);

export default ApplicationModel;
