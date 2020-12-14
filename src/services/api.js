import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const headers = () => {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: accessToken,
  };
};
function post(endpoint, data) {
  return api.post(endpoint, data, { headers: headers() });
}

function get(endpoint) {
  return api.get(endpoint, { headers: headers() });
}

function destroy(endpoint) {
  return api.delete(endpoint, { headers: headers() });
}

export { post, get, destroy };
