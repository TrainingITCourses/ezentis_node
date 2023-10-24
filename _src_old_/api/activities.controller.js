const activitiesService = require("./activities.service");
const middleware = require("../middleware/middleware");
const logger = middleware.logs.logger;

// const getActivities = (req, res) => {
//   try {
//     const activities = activitiesService.readActivities();
//     const status = activities.length > 0 ? 200 : 204;
//     return res.status(status).send(activities);
//   } catch (err) {
//     logger.error(err.message);
//     return res.status(400).send({ message: err.message });
//   }
// };
// const getActivity = (req, res) => {
//   try {
//     const id = req.args.id;
//     const activity = activitiesService.readActivityById(id);
//     if (!activity) return res.status(404).send({ message: "Activity not found" });
//     return res.send(activity);
//   } catch (err) {
//     return res.status(400).send({ message: err.message });
//   }
// };
// const postActivity = (req, res) => {
//   try {
//     const newActivity = req.args.body;
//     const activity = activitiesService.createActivity(newActivity);
//     return res.status(201).send(activity);
//   } catch (err) {
//     return res.status(400).send({ message: err.message });
//   }
// };

const activitiesController = {
  //getActivities,
  //getActivity,
  //postActivity,
};

module.exports = activitiesController;
