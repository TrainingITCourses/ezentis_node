const axios = require("axios");
const API_URL = "http://localhost:3000/v1";
const ACTIVITIES_URL = `${API_URL}/activities`;
const BOOKINGS_URL = `${API_URL}/bookings`;
const USERS_URL = `${API_URL}/users`;
const CREDENTIALS_URL = `${API_URL}/credentials`;
const REGISTER_URL = `${CREDENTIALS_URL}/register`;
const REFRESH_URL = `${CREDENTIALS_URL}/refresh`;
const LOGIN_URL = `${CREDENTIALS_URL}/login`;
const OPTIONS_BASE = {
  headers: {
    "x-api-key": "xp-client",
  },
};

const register = async (user) => await axios.post(REGISTER_URL, user, OPTIONS_BASE);
const refresh = async (token) => await axios.post(REFRESH_URL, token, OPTIONS_BASE);
const unregister = async (userId, options) => await axios.delete(`${CREDENTIALS_URL}/${userId}`, options);
const login = async (user) => await axios.post(LOGIN_URL, user, OPTIONS_BASE);
const postActivity = async (activity, options) => await axios.post(ACTIVITIES_URL, activity, options);
const deleteActivity = async (activityId, options) => await axios.delete(`${ACTIVITIES_URL}/${activityId}`, options);
const getActivities = async () => await axios.get(ACTIVITIES_URL, OPTIONS_BASE);
const getActivity = async (activityId) => await axios.get(`${ACTIVITIES_URL}/${activityId}`, OPTIONS_BASE);
const getActivityWithBookings = async (activityId, options) =>
  await axios.get(`${ACTIVITIES_URL}/${activityId}/bookings`, options);
const getMyActivities = async (userId, options) => await axios.get(`${USERS_URL}/${userId}/activities`, options);
const postBooking = async (booking, options) => await axios.post(BOOKINGS_URL, booking, options);
const deleteBooking = async (bookingId, options) => await axios.delete(`${BOOKINGS_URL}/${bookingId}`, options);
const getMyBookings = async (options) => await axios.get(`${BOOKINGS_URL}`, options);

const makeUserOptions = (token) => ({ headers: { ...OPTIONS_BASE.headers, Authorization: `Bearer ${token}` } });

const axiosFunctions = {
  register,
  refresh,
  unregister,
  login,
  postActivity,
  deleteActivity,
  getActivities,
  getActivity,
  getActivityWithBookings,
  getMyActivities,
  postBooking,
  deleteBooking,
  getMyBookings,
  makeUserOptions,
};

module.exports = axiosFunctions;
