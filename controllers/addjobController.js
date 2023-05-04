import JobModel from "../models/jobsModel.js";

const createJob = async (req, res) => {
  const { title, description, expriences } = req.body;
  const job = new JobModel({
    title,
    description,
    expriences,
  });
  try {
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const getJob = async (req, res) => {
  try {
    const job = await JobModel.find();
    res.status(200).json(job);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};

const updateJob = async (req, res) => {
  const job = await JobModel.findById(req.params.id);
  job.name = req.body.name;
  job.description = req.body.description;
  try {
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await JobModel.findByIdAndDelete(jobId);
    if (job) {
      res.status(200).json({ message: "Job deleted" });
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
export { createJob, getJob, updateJob, deleteJob };
