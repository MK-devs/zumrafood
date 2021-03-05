function login() {
  return axios
    .post("/login")
    .then(data => {
      return data;
    })
    .catch(e => {
      console.log(e);
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
