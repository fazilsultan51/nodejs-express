import SkillsModel from "../models/skillsModel.js";

const createSkill = async (req, res) => {
  const { title, description, expriences } = req.body;
  const skill = new SkillsModel({
    title,
    description,
  });
  try {
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const getSkill = async (req, res) => {
  try {
    const skills = await SkillsModel.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};

const updateSkill = async (req, res) => {
  const skills = await SkillsModel.findById(req.params.id);
  skills.name = req.body.name;
  skills.description = req.body.description;
  try {
    await skills.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const deleteSkills = async (req, res) => {
  try {
    const skillId = req.params.id;
    const skill = await SkillsModel.findByIdAndDelete(skillId);
    if (skill) {
      res.status(200).json({ message: "Skill deleted" });
    } else {
      res.status(404).json({ error: "Skill not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
export { createSkill, getSkill, updateSkill, deleteSkills };
