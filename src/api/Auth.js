import axios from "axios";

const apiBaseURL = process.env.REACT_APP_BASEURL;
export const login = (body) => {
  return axios
    .post(`${apiBaseURL}/login`, body)
    .then((response) => response)
    .catch((error) => error);
};

export const getAllGrades = (body) => {
  return axios
    .get(`${apiBaseURL}/getAllGrades`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const addGrades = (body) => {
  return axios
    .post(`${apiBaseURL}/addGrades`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};

export const register = (body) => {
  return axios
    .post(`${apiBaseURL}/register`, body)
    .then((response) => response)
    .catch((error) => error);
};
export const editGrades = (body) => {
  return axios
    .put(`${apiBaseURL}/editGrades`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const deleteStudentGrades = (body) => {
  return axios
    .delete(`${apiBaseURL}/deletestudentgrade`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      data: body,
    })

    .then((response) => response)
    .catch((error) => error);
};
