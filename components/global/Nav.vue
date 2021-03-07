<template>
  <nav v-if="renderComponent">
    <div class="nav__item">
      <div class="nav__logo">
        <div class="nav__logoShape"></div>
      </div>
    </div>
    <div class="nav__item">
      <div class="nav__link"></div>
      <Button
        v-if="!$cookies.get('userToken')"
        bgOrangeTrasparent
        @clickFn="$router.push('/login')"
        >Login</Button
      >

      <Button v-else bgOrangeTrasparent @clickFn="logout">Logout</Button>
    </div>
  </nav>
</template>

<script>
export default {
  watch: {
    $route() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    }
  },

  data() {
    return {
      renderComponent: true
    };
  },

  methods: {
    logout() {
      this.$cookies.remove("userToken");
      this.$router.push("/login");
    }
  }
};
</script>
