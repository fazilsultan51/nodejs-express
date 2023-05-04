import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  foundedYear: { type: Number },
  headquartersAddress: { type: String },
  website: { type: String },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const CompanyModel = mongoose.connection.model("Company", CompanySchema);

export default CompanyModel;
