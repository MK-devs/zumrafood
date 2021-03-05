import authAPIs from "./modules/auth";
import usersAPIs from "./modules/users";

export default class Api {
  constructor(context) {
    this.axios = context.$axios;
    this.axios.setBaseURL("https://reqres.in/api");
    this.axios.setHeader("Authorization", "");

    this.auth = authAPIs(this.axios);
    this.users = usersAPIs(this.axios);
  }
}
