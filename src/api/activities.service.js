const readActivities = () => {
  const activities = [{ name: "activity1" }, { name: "activity2" }];
  return activities;
};

const readActivityById = (id) => {
  const activity = { name: "activity" + id };
  return activity;
};

const createActivity = (activity) => {
  if (!activity.name) throw new Error("Name is required");
  return { ...activity, createdAt: new Date() };
};

const activitiesService = {
  readActivities,
  readActivityById,
  createActivity,
};

module.exports = activitiesService;
