import request from "../../../utils/request";

export const fetchRepository = async (username) => {
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  return await request(requestURL);
};
