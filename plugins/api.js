import Api from "../services/API";

export default (context, inject) => {
  inject("api", new Api(context));
};
