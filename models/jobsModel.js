import mongoose from "mongoose";
const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  expriences: { type: String, require: true },
  skills: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skills",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

const JobModel = mongoose.connection.model("job_details", JobSchema);

export default JobModel;
