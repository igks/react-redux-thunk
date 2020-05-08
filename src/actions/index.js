import { FETCH_GITHUB_DATA } from "./types";
import axios from "axios";

const apiURL = "https://api.github.com/users/KrunalLathiya";

export const fetchData = (data) => {
  return { type: FETCH_GITHUB_DATA, data };
};

export const fetchGithubData = () => {
  return (dispatch) => {
    return axios
      .get(apiURL)
      .then((response) => {
        dispatch(fetchData(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
