import LocationModel from "../models/joblocationsModel.js";

const createLocation = async (req, res) => {
  const { title, description, expriences } = req.body;
  const location = new LocationModel({
    title,
    description,
  });
  try {
    await location.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const getLocation = async (req, res) => {
  try {
    const location = await LocationModel.find();
    res.status(200).json(location);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};

const updateLocation = async (req, res) => {
  const location = await LocationModel.findById(req.params.id);
  skills.name = req.body.name;
  skills.description = req.body.description;
  try {
    await location.save();
    res.status(200).json(location);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const deleteLocation = async (req, res) => {
  try {
    const locationId = req.params.id;
    const location = await LocationModel.findByIdAndDelete(locationId);
    if (location) {
      res.status(200).json({ message: "location deleted" });
    } else {
      res.status(404).json({ error: "location not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
export { createLocation, getLocation, updateLocation, deleteLocation };
