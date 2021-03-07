<template>
  <div class="login_form">
    <form @submit.prevent.stop="login">
      <div class="input">
        <input v-model="email" type="email" placeholder="Email" required />
      </div>

      <div class="input">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <Button bgOrange type="submit">Login</Button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },

  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };

      this.$api.auth
        .login(payload)
        .then(res => {
          if ((res && res.status == 200) || res.status == 201) {
            this.$cookies.set("userToken", res.data.token);
            this.$emit("successHandler", "Successful Login");

            setTimeout(() => {
              this.$router.push("/users");
            }, 1000);
          } else {
            this.$emit("errHandler", res.data.error);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
