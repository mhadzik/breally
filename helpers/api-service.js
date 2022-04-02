import { API } from "../api.config";

const AUTHCREDENTIALS = Buffer.from(
  `${API.AUTHUSER}:${API.AUTHPASSWORD}`
).toString("base64");

const authHeader = {
  Authorization: "Basic " + AUTHCREDENTIALS,
};

export const getAllPages = async () => {
  const response = await fetch(API.URL + "/pages", {
    method: "GET",
    headers: authHeader,
  });
  const data = await response.json();

  if (!data) {
    return "Something went wrong";
  }
  return data;
};

export const getPageById = async (id) => {
  const response = await fetch(API.URL + `/page/${id}`, {
    method: "GET",
    headers: authHeader,
  });
  const data = await response.json();

  if (!data) {
    return "Something went wrong";
  }

  return data;
};

export const postNewsletter = async (req) => {
  const response = await fetch(API.URL + `/newsletter`, {
    method: "POST",
    headers: {
      ...authHeader,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await response.json();

  if (!data) {
    return "Something went wrong";
  }

  return data;
};
