import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const SkillsModel = mongoose.connection.model("Skills", CompanySchema);

export default SkillsModel;
