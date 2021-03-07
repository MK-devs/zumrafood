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

function editUser(id, payload) {
  return axios
    .put(`/users/${id}`, payload)
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const usersAPIs = {
  getUsers,
  editUser
};

export default $axios => {
  axios = $axios;
  return usersAPIs;
};
