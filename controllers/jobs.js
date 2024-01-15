const getAllJob = async (req, res) => {
  res.send("get all job");
};

const getJob = async (req, res) => {
  res.send("get a job");
};

const createJob = async (req, res) => {
  res.send("create job");
};
const updateJob = async (req, res) => {
  res.send("update job");
};
const deleteJob = async (req, res) => {
  res.send("delete all job");
};

moudule.exports = { getAllJob, getJob, createJob, updateJob, deleteJob };
