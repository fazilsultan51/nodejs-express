import CompanyModel from "../models/companiesModel.js";

const createCompany = async (req, res) => {
  const { name, industry, foundedYear, headquartersAddress, website } =
    req.body;
  const user_id = req.user.id;

  const company = new CompanyModel({
    name,
    industry,
    foundedYear,
    headquartersAddress,
    website,
    user_id,
  });
  try {
    await company.save();
    res.status(200).json(company);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const getCompany = async (req, res) => {
  try {
    const company = await CompanyModel.find();
    res.status(200).json(company);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};

const updateCompany = async (req, res) => {
  const company = await CompanyModel.findById(req.params.id);
  company.name = req.body.name;
  company.industry = req.body.industry;
  company.foundedYear = req.body.foundedYear;
  company.headquartersAddress = req.body.headquartersAddress;
  company.website = req.body.website;
  try {
    await company.save();
    res.status(200).json(company);
  } catch (error) {
    res.status(401).json("Server Error");
  }
};
const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await CompanyModel.findByIdAndDelete(companyId);
    if (company) {
      res.status(200).json({ message: "Company deleted" });
    } else {
      res.status(404).json({ error: "Company not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
export { createCompany, getCompany, updateCompany, deleteCompany };
