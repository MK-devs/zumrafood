function login(payload) {
  return axios
    .post("/login", payload)
    .then(data => {
      return data;
    })
    .catch(e => {
      return e.response;
    });
}

var axios = null;
const authAPIs = {
  login
};

export default $axios => {
  axios = $axios;
  return authAPIs;
};
