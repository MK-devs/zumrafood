function getUsers() {
  return axios
    .get("/users")
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const usersAPIs = {
  getUsers
};

export default $axios => {
  axios = $axios;
  return usersAPIs;
};
