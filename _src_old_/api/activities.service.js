const readActivities = () => {
  // throw new Error("Not implemented");
  const activities = [{ name: "activity1" }, { name: "activity2" }];
  return activities;
};

const readActivityById = (id) => {
  const activity = { name: "activity" + id };
  return activity;
};

const createActivity = (ownerId, activity) => {
  if (!activity.name) throw new Error("Name is required");
  return { ...activity, userId: ownerId, createdAt: new Date() };
};

const updateActivity = (id, activity) => {
  if (!id) throw new Error("Id is required");
  return { ...activity, createdAt: new Date() };
};

const activitiesService = {
  readActivities,
  readActivityById,
  createActivity,
  updateActivity,
};

module.exports = activitiesService;
