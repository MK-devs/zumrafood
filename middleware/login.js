export default function login({ app, redirect }) {
  if (app.$cookies.get("userToken")) {
    return redirect("/users");
  }
}
