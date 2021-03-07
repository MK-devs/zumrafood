export default function users({ app, redirect }) {
  if (!app.$cookies.get("userToken")) {
    return redirect("/login");
  }
}
