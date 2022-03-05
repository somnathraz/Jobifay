const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("Get all Jobs");
};
const UpdateJob = async (req, res) => {
  res.send("Update job");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};
const showStats = async (req, res) => {
  res.send("show Stats");
};

export { createJob, getAllJobs, UpdateJob, deleteJob, showStats };
