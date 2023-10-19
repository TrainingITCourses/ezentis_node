const activitiesService = require("./activities.service");

const getActivities = (req, res) => {
  try {
    const activities = activitiesService.readActivities();
    const status = activities.length > 0 ? 200 : 204;
    return res.status(status).send(activities);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const getActivity = (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Id is required");
    const activity = activitiesService.readActivityById(id);
    if (!activity) return res.status(404).send({ message: "Activity not found" });
    return res.send(activity);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
const postActivity = (req, res) => {
  try {
    const newActivity = req.body;
    if (!newActivity) throw new Error("Body is required");
    const activity = activitiesService.createActivity(newActivity);
    return res.status(201).send(activity);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const activitiesController = {
  getActivities,
  getActivity,
  postActivity,
};

module.exports = activitiesController;
